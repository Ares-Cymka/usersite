/**
 * Boxed Space Anomaly — fragment shader
 * made by Matthias Hurrle (@atzedent)
 * Cubemap texture by Emil Persson (Humus), CC BY 3.0
 */
export const BOXED_SPACE_ANOMALY_FRAGMENT = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2[10] pointers;
#define PA pointers
#define zoom (P>1 ? distance(PA[0].xy,PA[1].xy)/MN : .0)
uniform samplerCube cubeMap;
#define cmap cubeMap
#define mouse (touch/R)
#define P pointerCount
#define FC gl_FragCoord.xy
#define R resolution
#define T time
#define N normalize
#define S smoothstep
#define MN min(R.x,R.y)
#define rot(a) mat2(cos((a)-vec4(0,11,33,0)))
float tor(vec3 p, vec2 s) {
	vec2 c=vec2(length(p.xy)-s.x,p.z);
	return length(c)-s.y;
}
vec2 map(vec3 p) {
	vec3 q=p;
	p.yz*=rot(-mouse.y*6.3-T*.4);
	p.xz*=rot(3.14+mouse.x*6.3+T*.2);
	vec2
	a=vec2(abs(tor(p,vec2(1,.4)))-.01,1),
	b=vec2(abs(length(q)-10.)-.05,0);
	a=a.x<b.x?a:b;
	return a;
}
vec3 norm(vec3 p) {
	float h=1e-3; vec2 k=vec2(-1,1);
	return N(
		k.xyy*map(p+k.xyy*h).x+
		k.yxy*map(p+k.yxy*h).x+
		k.yyx*map(p+k.yyx*h).x+
		k.xxx*map(p+k.xxx*h).x
	);
}
vec3 dir(vec2 uv, vec3 p, vec3 t, float z) {
	vec3 up=vec3(0,1,0),
	f=N(t-p),
	r=N(cross(up,f)),
	u=N(cross(f,r));
	return N(mat3(r,u,f)*vec3(uv,z));
}
void main() {
	vec2 uv=(FC-.5*R)/MN;
	float grain=MN;
	uv=floor(uv*grain)/grain;
	vec2 st=uv*.8;
	vec3 col=vec3(0),
	p=vec3(0,0,-3.+zoom),
	rd=dir(uv,p,vec3(0),1.-.2*dot(uv,uv));
	vec3 lp=vec3(-1,2,-3);
	float dd=.0, at=.0, bnz=.0, side=1.;
	for (float i=.0; i<400.; i++) {
		vec2 d=map(p);
		d.x*side;
		if (abs(d.x)<1e-3) {
			vec3 n=norm(p)*side, l=N(lp-p);
			float dif=clamp(dot(l,n),.0,1.);
			if (d.y<1.) {
				rd=reflect(rd,n);
				rd.xz*=rot(T);
				col=mix(col,texture(cmap,-rd).rgb,.5);
				break;
			} else if (bnz++<1.) {
				vec3 r=reflect(rd,n);
				r.xz*=rot(T);
				float fre=clamp(1.+dot(rd,n),.0,1.),
				spe=pow(clamp(dot(r,l),.0,1.),64.);
				col+=spe*2.;
				col+=2.*fre*texture(cmap,r).rgb;
				at*=15.;
				col+=at*at;
			}
			if (dot(l,n)<.0) l=-l;
			dif=clamp(dot(l,n),.0,1.);
			float fre=pow(clamp(1.+dot(rd,n),.0,1.),5.);
			col+=.08+.2*dif+.1*fre;
			side=-side;
			vec3 rdo=refract(rd,n,1.+side*.4);
			if (dot(rdo,rdo)==.0) rdo=reflect(rd,n);
			rd=rdo;
			d.x=11e-1;
		}
		p+=rd*d.x;
		dd+=d.x;
		at+=.05*(.05/dd);
	}
	col=S(.0,1.25,col);
	col=tanh(col)*vec3(1.7,.9,1.1);
	col=pow(col,vec3(.4545));
	uv=2.*FC/R-1.;
	uv*=.8;
	uv*=uv;
	float v=dot(uv,uv);
	col=mix(col,vec3(0),v);
  O=vec4(col,1);
}
`;
