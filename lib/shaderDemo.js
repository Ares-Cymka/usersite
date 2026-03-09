/**
 * Shader demo runtime — made by Matthias Hurrle (@atzedent)
 * Boxed Space Anomaly: WebGL2 renderer, store, pointer handler, editor.
 */
let editMode = false;
let resolution = 1;
let renderDelay = 1000;
let dpr = Math.max(1, resolution * (typeof window !== "undefined" ? window.devicePixelRatio : 1));
let frm;
let source;
let editor;
let store;
let renderer;
let pointers;
const shaderId = "azObdyy";

function resize(canvas) {
  if (typeof window === "undefined") return;
  const doc = document.documentElement;
  const width = doc.clientWidth || window.innerWidth || 0;
  const height = doc.clientHeight || window.innerHeight || 0;
  canvas.width = Math.ceil(width * dpr);
  canvas.height = Math.ceil(height * dpr);
  if (renderer) renderer.updateScale(dpr);
}

function toggleView(btnToggleView, canvas) {
  editor.hidden = btnToggleView.checked;
  canvas.style.setProperty("--canvas-z-index", btnToggleView.checked ? "0" : "-1");
}

function reset(btnToggleView, btnToggleResolution, store, editor, renderer, renderThis) {
  const shader = source;
  editor.text = shader ? shader.textContent : renderer.defaultSource;
  store.putShaderSource(shaderId, editor.text);
  renderThis();
}

function toggleResolution(btnToggleResolution, pointers, resize, canvas) {
  resolution = btnToggleResolution.checked ? 0.5 : 1;
  dpr = Math.max(1, resolution * window.devicePixelRatio);
  pointers.updateScale(dpr);
  resize(canvas);
}

function loop(now, renderer, pointers, frmRef) {
  renderer.updateMouse(pointers.first);
  renderer.updatePointerCount(pointers.count);
  renderer.updatePointerCoords(pointers.coords);
  renderer.updateMove(pointers.move);
  renderer.render(now);
  frmRef.current = requestAnimationFrame((t) => loop(t, renderer, pointers, frmRef));
}

function renderThis(editor, store, renderer, renderDelayRef) {
  editor.clearError();
  store.putShaderSource(shaderId, editor.text);
  const result = renderer.test(editor.text);
  if (result) {
    editor.setError(result);
  } else {
    renderer.updateShader(editor.text);
  }
  if (renderDelayRef.cancel) renderDelayRef.cancel();
  loop(0, renderer, pointers, renderDelayRef);
}

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function init(container) {
  const canvas = container.querySelector("#canvas");
  const codeEditor = container.querySelector("#codeEditor");
  const errorEl = container.querySelector("#error");
  const indicator = container.querySelector("#indicator");
  const btnToggleView = container.querySelector("#btnToggleView");
  const btnToggleResolution = container.querySelector("#btnToggleResolution");
  const btnReset = container.querySelector("#btnReset");

  if (!canvas || !codeEditor || !errorEl || !indicator) return;

  source = container.querySelector("script[type='x-shader/x-fragment']");

  renderer = new Renderer(canvas, dpr);
  pointers = new PointerHandler(canvas, dpr);
  store = new Store(window.location);
  editor = new Editor(codeEditor, errorEl, indicator);
  editor.text = source ? source.textContent : renderer.defaultSource;
  renderer.setup();
  renderer.init();

  if (!editMode) {
    btnToggleView.checked = true;
    toggleView(btnToggleView, canvas);
  }
  if (resolution === 0.5) {
    btnToggleResolution.checked = true;
    toggleResolution(btnToggleResolution, pointers, () => resize(canvas), canvas);
  }

  canvas.addEventListener("shader-error", (e) => editor.setError(e.detail));

  const frmRef = { current: null };
  const render = debounce(() => {
    renderThis(editor, store, renderer, frmRef);
  }, renderDelay);

  codeEditor.addEventListener("input", render);

  window.shaderResize = () => resize(canvas);
  resize(canvas);

  if (renderer.test(source ? source.textContent : "") === null) {
    renderer.updateShader(source ? source.textContent : renderer.defaultSource);
  }
  loop(0, renderer, pointers, frmRef);

  if (btnToggleView) {
    btnToggleView.onclick = () => toggleView(btnToggleView, canvas);
  }
  if (btnToggleResolution) {
    btnToggleResolution.onchange = () =>
      toggleResolution(btnToggleResolution, pointers, () => resize(canvas), canvas);
  }
  if (btnReset) {
    btnReset.onclick = () => reset(btnToggleView, btnToggleResolution, store, editor, renderer, () => renderThis(editor, store, renderer, frmRef));
  }

  window.addEventListener("resize", () => resize(canvas));
  window.addEventListener("keydown", (e) => {
    if (e.key === "L" && e.ctrlKey) {
      e.preventDefault();
      btnToggleView.checked = !btnToggleView.checked;
      toggleView(btnToggleView, canvas);
    }
  });

  return () => {
    if (frmRef.current) cancelAnimationFrame(frmRef.current);
    window.removeEventListener("resize", () => resize(canvas));
  };
}

class Renderer {
  #vertexSrc =
    "#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}";
  #fragmtSrc =
    "#version 300 es\nprecision highp float;\nout vec4 O;\nuniform float time;\nuniform vec2 resolution;\nvoid main() {\n\tvec2 uv=gl_FragCoord.xy/resolution;\n\tO=vec4(uv,sin(time)*.5+.5,1);\n}";
  #vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  constructor(canvas, scale) {
    this.canvas = canvas;
    this.scale = scale;
    this.gl = canvas.getContext("webgl2");
    if (!this.gl) return;
    this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
    this.shaderSource = this.#fragmtSrc;
    this.mouseMove = [0, 0];
    this.mouseCoords = [0, 0];
    this.pointerCoords = [0, 0];
    this.nbrOfPointers = 0;
  }

  get defaultSource() {
    return this.#fragmtSrc;
  }

  updateShader(source) {
    this.reset();
    this.shaderSource = source;
    this.setup();
    this.init();
  }

  updateMove(deltas) {
    this.mouseMove = deltas;
  }

  updateMouse(coords) {
    this.mouseCoords = coords;
  }

  updatePointerCoords(coords) {
    this.pointerCoords = coords;
  }

  updatePointerCount(nbr) {
    this.nbrOfPointers = nbr;
  }

  updateScale(scale) {
    this.scale = scale;
    if (this.gl)
      this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
  }

  compile(shader, source) {
    const gl = this.gl;
    if (!gl) return;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      this.canvas.dispatchEvent(
        new CustomEvent("shader-error", { detail: gl.getShaderInfoLog(shader) })
      );
    }
  }

  test(source) {
    if (!this.gl) return "WebGL2 not supported";
    const gl = this.gl;
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    let result = null;
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      result = gl.getShaderInfoLog(shader);
    }
    if (!gl.getShaderParameter(shader, gl.DELETE_STATUS)) {
      gl.deleteShader(shader);
    }
    return result;
  }

  reset() {
    const { gl, program, vs, fs } = this;
    if (!gl || !program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;
    if (vs && !gl.getShaderParameter(vs, gl.DELETE_STATUS)) {
      gl.detachShader(program, vs);
      gl.deleteShader(vs);
    }
    if (fs && !gl.getShaderParameter(fs, gl.DELETE_STATUS)) {
      gl.detachShader(program, fs);
      gl.deleteShader(fs);
    }
    gl.deleteProgram(program);
  }

  createCubeMap() {
    const { gl } = this;
    if (!gl) return;
    const cubeMap = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMap);
    const imgpath = "https://assets.codepen.io/4386748";
    const faces = [
      [gl.TEXTURE_CUBE_MAP_POSITIVE_X, "03posx.jpg"],
      [gl.TEXTURE_CUBE_MAP_NEGATIVE_X, "03negx.jpg"],
      [gl.TEXTURE_CUBE_MAP_POSITIVE_Y, "03posy.jpg"],
      [gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, "03negy.jpg"],
      [gl.TEXTURE_CUBE_MAP_POSITIVE_Z, "03posz.jpg"],
      [gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, "03negz.jpg"],
    ];
    for (const [target, url] of faces) {
      const level = 0;
      const internalFormat = gl.RGBA;
      const width = 512;
      const height = 512;
      const format = gl.RGBA;
      const type = gl.UNSIGNED_BYTE;
      gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMap);
        gl.texImage2D(target, level, internalFormat, format, type, image);
      };
      image.src = `${imgpath}/${url}?width=512&height=512&format=auto`;
    }
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  }

  setup() {
    const gl = this.gl;
    if (!gl) return;
    this.createCubeMap();
    this.vs = gl.createShader(gl.VERTEX_SHADER);
    this.fs = gl.createShader(gl.FRAGMENT_SHADER);
    this.compile(this.vs, this.#vertexSrc);
    this.compile(this.fs, this.shaderSource);
    this.program = gl.createProgram();
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(this.program));
    }
  }

  init() {
    const { gl, program } = this;
    if (!gl || !program) return;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.#vertices), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    program.resolution = gl.getUniformLocation(program, "resolution");
    program.time = gl.getUniformLocation(program, "time");
    program.move = gl.getUniformLocation(program, "move");
    program.touch = gl.getUniformLocation(program, "touch");
    program.pointerCount = gl.getUniformLocation(program, "pointerCount");
    program.pointers = gl.getUniformLocation(program, "pointers");
    program.cubeMap = gl.getUniformLocation(program, "cubeMap");
  }

  render(now = 0) {
    const { gl, program, buffer, canvas, mouseMove, mouseCoords, pointerCoords, nbrOfPointers } =
      this;
    if (!gl || !program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(program.resolution, canvas.width, canvas.height);
    gl.uniform1f(program.time, now * 1e-3);
    gl.uniform2f(program.move, ...mouseMove);
    gl.uniform2f(program.touch, ...mouseCoords);
    gl.uniform1i(program.pointerCount, nbrOfPointers);
    gl.uniform2fv(program.pointers, pointerCoords);
    gl.uniform1i(program.cubeMap, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

class Store {
  constructor(key) {
    this.key = (key && key.href) ? key.href : String(key);
    this.store = typeof window !== "undefined" ? window.localStorage : { getItem: () => null, setItem: () => {}, removeItem: () => {}, length: 0, key: () => null };
  }

  #ownShadersKey = "ownShaders";
  #StorageType = Object.freeze({ shader: "fragmentSource", config: "config" });

  #getKeyPrefix(type) {
    return `${type}${btoa(this.key)}`;
  }

  #getKey(type, name) {
    return `${this.#getKeyPrefix(type)}${btoa(name)}`;
  }

  putShaderSource(name, source) {
    this.store.setItem(this.#getKey(this.#StorageType.shader, name), source);
  }

  getShaderSource(name) {
    return this.store.getItem(this.#getKey(this.#StorageType.shader, name));
  }

  getOwnShaders() {
    const result = this.store.getItem(this.#getKey(this.#StorageType.config, this.#ownShadersKey));
    return result ? JSON.parse(result) : [];
  }

  putOwnShader(shader) {
    const ownShaders = this.getOwnShaders();
    const index = ownShaders.findIndex((s) => s.uuid === shader.uuid);
    if (index === -1) ownShaders.push(shader);
    else ownShaders[index] = shader;
    this.store.setItem(
      this.#getKey(this.#StorageType.config, this.#ownShadersKey),
      JSON.stringify(ownShaders)
    );
  }
}

class PointerHandler {
  constructor(element, scale) {
    this.scale = scale;
    this.active = false;
    this.pointers = new Map();
    this.lastCoords = [0, 0];
    this.moves = [0, 0];
    const map = (el, s, x, y) => [x * s, el.height - y * s];
    element.addEventListener("pointerdown", (e) => {
      this.active = true;
      this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
    });
    element.addEventListener("pointerup", (e) => {
      if (this.count === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
      this.active = this.pointers.size > 0;
    });
    element.addEventListener("pointerleave", (e) => {
      if (this.count === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
      this.active = this.pointers.size > 0;
    });
    element.addEventListener("pointermove", (e) => {
      if (!this.active) return;
      this.lastCoords = [e.clientX, e.clientY];
      this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
      this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
    });
  }

  getScale() {
    return this.scale;
  }

  updateScale(scale) {
    this.scale = scale;
  }

  get count() {
    return this.pointers.size;
  }

  get move() {
    return this.moves;
  }

  get coords() {
    return this.pointers.size > 0
      ? Array.from(this.pointers.values())
          .map((p) => [...p])
          .flat()
      : [0, 0];
  }

  get first() {
    return this.pointers.values().next().value || this.lastCoords;
  }
}

class Editor {
  constructor(textarea, errorfield, errorindicator) {
    this.textarea = textarea;
    this.errorfield = errorfield;
    this.errorindicator = errorindicator;
    textarea.addEventListener("keydown", this.handleKeydown.bind(this));
    textarea.addEventListener("scroll", this.handleScroll.bind(this));
  }

  get hidden() {
    return this.textarea.classList.contains("hidden");
  }

  set hidden(value) {
    if (value) this.#hide();
    else this.#show();
  }

  get text() {
    return this.textarea.value;
  }

  set text(value) {
    this.textarea.value = value;
  }

  setError(message) {
    this.errorfield.innerHTML = message;
    this.errorfield.classList.add("opaque");
    const match = message.match(/ERROR: \d+:(\d+):/);
    const lineNumber = match ? parseInt(match[1], 10) : 0;
    const overlay = document.createElement("pre");
    overlay.classList.add("overlay");
    overlay.textContent = "\n".repeat(lineNumber);
    document.body.appendChild(overlay);
    const offsetTop = parseInt(getComputedStyle(overlay).height, 10);
    this.errorindicator.style.setProperty("--top", offsetTop + "px");
    this.errorindicator.style.visibility = "visible";
    document.body.removeChild(overlay);
  }

  clearError() {
    this.errorfield.textContent = "";
    this.errorfield.classList.remove("opaque");
    this.errorindicator.style.visibility = "hidden";
  }

  #hide() {
    [this.errorindicator, this.errorfield, this.textarea].forEach((el) =>
      el.classList.add("hidden")
    );
  }

  #show() {
    [this.errorindicator, this.errorfield, this.textarea].forEach((el) =>
      el.classList.remove("hidden")
    );
    this.textarea.focus();
  }

  handleScroll() {
    this.errorindicator.style.setProperty("--scroll-top", `${this.textarea.scrollTop}px`);
  }

  handleKeydown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      this.handleTabKey(event.shiftKey);
    } else if (event.key === "Enter") {
      event.preventDefault();
      this.handleEnterKey();
    }
  }

  handleTabKey(shiftPressed) {
    if (this.#getSelectedText() !== "") {
      if (shiftPressed) this.#unindentSelectedText();
      else this.#indentSelectedText();
    } else {
      this.#indentAtCursor();
    }
  }

  #getSelectedText() {
    const editor = this.textarea;
    return editor.value.substring(editor.selectionStart, editor.selectionEnd);
  }

  #indentAtCursor() {
    const editor = this.textarea;
    const cursorPos = editor.selectionStart;
    document.execCommand("insertText", false, "\t");
    editor.selectionStart = editor.selectionEnd = cursorPos + 1;
  }

  #indentSelectedText() {
    const editor = this.textarea;
    const cursorPos = editor.selectionStart;
    const selectedText = this.#getSelectedText();
    const indentedText = selectedText.split("\n").map((line) => "\t" + line).join("\n");
    document.execCommand("insertText", false, indentedText);
    editor.selectionStart = cursorPos;
  }

  #unindentSelectedText() {
    const editor = this.textarea;
    const cursorPos = editor.selectionStart;
    const selectedText = this.#getSelectedText();
    const indentedText = selectedText
      .split("\\n")
      .map((line) => line.replace(/^\t/, "").replace(/^ /, ""))
      .join("\\n");
    document.execCommand("insertText", false, indentedText);
    editor.selectionStart = cursorPos;
  }

  handleEnterKey() {
    const editor = this.textarea;
    const visibleTop = editor.scrollTop;
    const cursorPosition = editor.selectionStart;
    let start = cursorPosition - 1;
    while (start >= 0 && editor.value[start] !== "\n") start--;
    let newLine = "";
    while (
      start < cursorPosition - 1 &&
      (editor.value[start + 1] === " " || editor.value[start + 1] === "\t")
    ) {
      newLine += editor.value[start + 1];
      start++;
    }
    document.execCommand("insertText", false, "\n" + newLine);
    editor.selectionStart = editor.selectionEnd = cursorPosition + 1 + newLine.length;
    editor.scrollTop = visibleTop;
  }
}
