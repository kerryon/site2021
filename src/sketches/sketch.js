import Raumsonde from '../img/raumsonde.obj';
import Planet from '../img/planet.obj';
import Comet from '../img/comet.obj';

export default function sketch(p) {
  let model, model2, model3;
  let x = 1;
  let y = 1;
  let easing = 0.007;
  let drops = [];
  let orbit = 0;

  let pC = p.color('#e7e7e7');
  let sC = p.color('#1a1a1a');
  let aC = p.color('#3d0dee');

  p.preload = function () {
    model = p.loadModel(Raumsonde, true);
    model2 = p.loadModel(Planet, true);
    model3 = p.loadModel(Comet, true);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.smooth();

    for (let i = 0; i < 5; i++) {
      drops[i] = new Drop();
    }
  };

  p.draw = function () {
    p.noFill();
    p.noStroke();
    p.fill(pC);
    p.background(sC);

    let targetX = p.map(p.mouseX, 0, p.width, -200, 200);
    let targetY = p.map(p.mouseY, 0, p.height, -200, 200);

    let dx = targetX - x;
    x += dx * easing;

    let dy = targetY - y;
    y += dy * easing;

    let rX = (p.mouseX - x) * 0.0005;
    let rY = (p.mouseY - y) * 0.0005;

    if (p.mouseIsPressed) {
      aC = p.color('#FE606F');
    } else {
      aC = p.color('#3d0dee');
    }

    p.ambientLight(sC);
    p.directionalLight(pC, 0, 1, 0.8);
    p.lightFalloff(0.9, 0.01, 0);
    p.pointLight(aC, p.mouseX - p.width / 2, p.mouseY - p.height / 2, 30);

    p.push();
    p.translate(0, 0, 0);
    p.rotate(45);
    for (let i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
    p.pop();

    p.push();
    p.ambientMaterial(255);
    p.translate(0, p.height / 2 + 100, -1000);
    p.rotateZ(-orbit);
    p.rotateX(-orbit * 8);
    p.translate(0, -1200, 0);
    p.scale(0.7);
    p.rotateY(-orbit * 3);
    p.model(model3);
    orbit += p.radians(1 / 10);
    p.pop();

    p.push();
    p.translate(0, p.height / 2 + 100, -1000);
    p.rotate(p.PI / 7);
    p.rotateY(p.frameCount / 500);
    p.scale(10);
    p.ambientMaterial(255);
    p.model(model2);
    p.pop();

    p.push();
    p.translate(x, y, 0);
    p.rotateX(rX);
    p.rotateZ(rY - 0.1);
    p.specularMaterial(pC);
    p.rotateX(p.frameCount / 300);
    p.model(model);
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  function Drop() {
    this.x = p.random(-p.width / 2, p.width / 2);
    this.y = p.random(-p.height, -p.height / 2);
    this.z = p.random(0, 20);
    this.len = p.map(this.z, 0, 20, 20, 100);
    this.yspeed = p.map(this.z, 0, 20, 1, 20);

    this.fall = function () {
      this.y = this.y + this.yspeed;
      var grav = p.map(this.z, 0, 20, 0.2, 0.5);
      this.yspeed = this.yspeed + grav;

      if (this.y > p.height) {
        this.x = p.random(-p.width / 2, p.width / 2);
        this.y = p.random(-p.height * 1.5, -p.height);
        this.yspeed = p.map(this.z, 0, 20, 4, 10);
      }
    };

    this.show = function () {
      var sw = p.map(this.z, 0, 20, 1, 2);
      p.noFill();
      p.stroke(pC);
      p.strokeWeight(sw);
      p.line(this.x, this.y, this.x, this.y + this.len);
    };
  }
}
