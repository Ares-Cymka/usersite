"use client";

import { useEffect, useRef } from "react";
import { BOXED_SPACE_ANOMALY_FRAGMENT } from "@/lib/shaderSource";

export default function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    let cancelled = false;
    import("@/lib/shaderDemo").then(({ init }) => {
      if (cancelled) return;
      const teardown = init(container);
      if (teardown) cleanupRef.current = teardown;
    });

    return () => {
      cancelled = true;
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (typeof window !== "undefined" && (window as unknown as { shaderResize?: () => void }).shaderResize) {
        delete (window as unknown as { shaderResize?: () => void }).shaderResize;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="shader-demo-container"
      aria-hidden
    >
      <script
        type="x-shader/x-fragment"
        dangerouslySetInnerHTML={{ __html: BOXED_SPACE_ANOMALY_FRAGMENT }}
      />
      <canvas id="canvas" />
      <textarea
        id="codeEditor"
        className="editor hidden"
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
        translate="no"
        defaultValue=""
        aria-hidden
      />
      <pre id="error" aria-hidden />
      <div id="indicator" />
      <div id="controls">
        <div className="controls">
          <input
            id="btnToggleView"
            className="icon"
            type="checkbox"
            name="toggleView"
            aria-label="Toggle code view"
          />
          <input
            id="btnToggleResolution"
            className="icon"
            type="checkbox"
            name="toggleResolution"
            aria-label="Toggle resolution"
          />
          <input
            id="btnReset"
            className="icon"
            type="checkbox"
            name="reset"
            aria-label="Reset shader"
          />
        </div>
      </div>
    </div>
  );
}
