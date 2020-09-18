export default function sketch(p) {
  let model;

  p.preload = function () {
    model = p.loadModel('./img/raumsonde.obj', true);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = function () {
    p.noFill();
    p.stroke('1a1a1a');
    p.fill('e7e7e7');
    p.background('#1a1a1a');

    p.directionalLight(250, 250, 250, 0, 1, 0.5);

    p.push();
    p.translate(0, p.height / 2);
    p.rotateZ(p.frameCount / -300);
    p.sphere(400, 16, 16);
    p.pop();

    // p.translate(0, 0, 0);
    p.model(model);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}
