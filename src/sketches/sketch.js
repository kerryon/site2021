export default function sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = function () {
    p.noFill();
    p.strokeWeight(1);
    p.stroke(255, 255, 255, 10);
    p.background(0);

    p.push();
    p.rotateX(p.frameCount / 100);
    p.rotateY(p.frameCount / 100);
    p.rotateZ(p.frameCount / 100);
    p.sphere(200, 24, 16);
    p.pop();
  };
}
