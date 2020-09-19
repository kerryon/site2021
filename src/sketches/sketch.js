import Raumsonde from '../img/raumsonde.obj';

export default function sketch(p) {
  let model;
  let x = 1;
  let y = 1;
  let easing = 0.005;

  p.preload = function () {
    model = p.loadModel('./img/raumsonde.obj', true);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    model = p.loadModel(Raumsonde, true);
    p.smooth();
  };

  p.draw = function () {
    p.noFill();
    p.noStroke();
    p.fill('#e7e7e7');
    p.background('#1a1a1a');

    let targetX = p.map(p.mouseX, 0, p.width, -300, 300);
    let targetY = p.map(p.mouseY, 0, p.height, -300, 300);

    let dx = targetX - x;
    x += dx * easing;

    let dy = targetY - y;
    y += dy * easing;

    let rX = (p.mouseX - x) * 0.0005;
    let rY = (p.mouseY - y) * 0.0005;

    p.ambientLight('#1a1a1a');
    p.directionalLight(231, 231, 231, 0, 1, 0.8);
    p.lightFalloff(0.9, 0.01, 0);
    p.pointLight(
      61,
      13,
      238,
      p.mouseX - p.width / 2,
      p.mouseY - p.height / 2,
      5
    );

    // for (let i = 0; i < 20; i += 1) {
    //   p.push();
    //   p.translate(0, 0, 0);
    //   p.sphere(30, 6, 6);
    //   p.pop();
    // }

    // p.push();
    // p.translate(0, 100 + p.height / 2);
    // p.rotateZ(p.frameCount / -300);
    // p.sphere(450, 24, 24);
    // p.pop();

    p.translate(x, y, 0);
    p.rotateX(rX);
    p.rotateZ(rY - 0.1);
    p.specularMaterial(255);
    // p.ambientMaterial(255);
    p.rotateX(p.frameCount / 300);
    p.model(model);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}
