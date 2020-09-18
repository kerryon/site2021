import Raumsonde from '../img/raumsonde.obj';

export default function sketch(p) {
  let model;

  p.preload = function () {
    model = p.loadModel('./img/raumsonde.obj', true);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    model = p.loadModel(Raumsonde, true);
  };

  p.draw = function () {
    p.noFill();
    // p.stroke('#1a1a1a');
    p.noStroke();
    p.fill('#e7e7e7');
    p.background('#1a1a1a');

    p.directionalLight(250, 250, 250, 0, 1, 0.3);

    p.push();
    p.translate(0, p.height / 2);
    p.rotateZ(p.frameCount / -300);
    p.sphere(400, 24, 24);
    p.pop();

    p.ambientMaterial(255);
    p.rotateX(p.frameCount / 300);
    p.model(model);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}
