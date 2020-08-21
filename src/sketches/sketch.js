export default function sketch(p) {
  let backShader;
  let curTime = 0.0;
  let drops = [];
  let metanum = 7;
  let minsize = 50;
  let maxsize = 100;

  var vert = `
  precision highp float; 

  attribute vec3 aPosition;
  attribute vec3 aNormal;
  attribute vec2 aTexCoord;
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelViewMatrix;
  
  varying vec2 vTexCoord;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec4 glPosition;
  
  void main() { 
    vec4 positionVec4 = vec4(aPosition, 1.0);
  
    gl_Position = positionVec4;
    vPosition = aPosition;
    vNormal = aNormal;
    
    vTexCoord = aTexCoord;
  }  
`;
  var frag = `
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define METABALLNUM 10

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_positions[METABALLNUM];
uniform float u_radiuses[METABALLNUM];
uniform int u_metanum;
uniform vec4 u_backcol1;
uniform vec4 u_backcol2;
uniform vec4 u_col1;
uniform vec4 u_col2;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vTexCoord;

float map(float value, float from1, float to1, float from2, float to2){
  return from2 + (value - from1) / (to1 - from1) * (to2 - from2);
}

float rand(float n){return fract(sin(n) * 43758.5453123);}

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float metaball(vec2 metapos, float rad)
{
  vec2 p = gl_FragCoord.xy - metapos;
	return pow(rad, 2.0)  / dot(p, p);
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;

  vec3 col = mix(u_backcol1.xyz, u_backcol2.xyz, st.y);
  float maxPower = 0.;
  float pixPower = 0.;

  for(int i=0; i<METABALLNUM; i++){
    if(i < u_metanum){
      vec2 pos = u_positions[i];
      float rad = u_radiuses[i];
      float power = metaball(pos, rad);
      pixPower += power;

      if(maxPower < power){
        maxPower = power;
      }
    }
  }

  vec3 val = vec3(0.0);
  val = mix(u_col1.xyz, u_col2.xyz, st.y);

  
  float pixMin = 2.5;
  float thresh = 0.02;
  if(pixPower > pixMin){
    float mixval = map(min(pixPower, pixMin + thresh), pixMin, pixMin + thresh, 0.0, 1.0);
    col = mix(mix(u_backcol1.xyz, u_backcol2.xyz, st.y), val, mixval);
  }

  col = mix(col, vec3(1.0), rand(st * 2.523) * 0.4);

  gl_FragColor = vec4(col, 1);
}
`;

  const ColorPalette = Object.freeze({
    pink: '#414656',
    yellow: '#AA4B60',
    green: '#AA4B60',
    blue: '#3F6AAE',
  });

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    p.pixelDensity(1);

    //shader
    backShader = p.createShader(vert, frag);
    this.shader(backShader);

    for (let i = 0; i < metanum; i++) {
      let drop = new Drop(
        p.createVector(p.random(p.width), p.height + p.random(p.height)),
        p.random(minsize, maxsize),
        15.0
      );
      drops.push(drop);
    }

    p.noStroke();
  };

  p.draw = function () {
    for (let i = 0; i < drops.length; i++) {
      let drop = drops[i];
      drop.update();
    }

    if (p.frameCount < 5) {
      backShader.setUniform('u_resolution', [p.width, p.height]);
      backShader.setUniform('u_metanum', metanum + 1);
    }

    let positions = [];
    let radiuses = [];
    for (let i = 0; i < metanum; i++) {
      let drop = drops[i];
      let pos = drop.pos;
      positions.push(pos.x, pos.y);
      let rad = drop.size;
      radiuses.push(rad);
    }
    positions.push(p.width * 0.5, p.height * 2);
    radiuses.push(p.height * 1.9);

    backShader.setUniform('u_positions', positions);
    backShader.setUniform('u_radiuses', radiuses);
    backShader.setUniform('u_time', curTime);
    backShader.setUniform('u_backcol1', p.color(ColorPalette.pink)._array);
    backShader.setUniform('u_backcol2', p.color(ColorPalette.yellow)._array);
    backShader.setUniform('u_col1', p.color(ColorPalette.green)._array);
    backShader.setUniform('u_col2', p.color(ColorPalette.blue)._array);

    p.shader(backShader);
    p.quad(-1, -1, 1, -1, 1, 1, -1, 1);

    curTime += p.deltaTime * 0.001;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  class Drop {
    constructor(pos, size, speed) {
      this.pos = pos;
      this.size = size;
      this.speed = speed;
      this.minsize = minsize;
      this.maxsize = maxsize;
    }

    update() {
      this.pos.add(
        p.createVector(
          0,
          -this.speed * p.map(this.size, this.minsize, this.maxsize, 0.5, 1.0),
          0
        )
      );
      if (this.pos.y < -this.maxsize * 2) {
        this.pos.y = p.height * 1.5 + p.random(p.height);
        this.pos.x = p.random(p.width);
        this.size = p.random(this.minsize, this.maxsize);
      }
    }
  }
}
