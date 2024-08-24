class Sakura {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Sakura.randomRange(0, window.innerWidth);
    this.y = Sakura.randomRange(-200, -50);
    this.speed = Sakura.randomRange(0.3, 1);
    this.angle = Sakura.randomRange(0, Math.PI * 2);
    this.size = Sakura.randomRange(3, 7);
  }

  static randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.scale(this.size / 10, this.size / 10);

    // 绘制花瓣形状
    cxt.beginPath();
    cxt.moveTo(5, 0);
    cxt.bezierCurveTo(5, 5, 10, 15, 15, 5);
    cxt.bezierCurveTo(20, -5, 15, -15, 10, -5);
    cxt.bezierCurveTo(5, -15, 0, -5, 0, 0);
    cxt.closePath();

    // 应用颜色渐变
    const gradient = cxt.createLinearGradient(0, 0, 0, -this.size * 10);
    gradient.addColorStop(0, "#FFB6C1");
    gradient.addColorStop(1, "rgba(255, 182, 193, 0)");
    cxt.fillStyle = gradient;
    cxt.fill();

    cxt.restore();
  }

  update() {
    this.y += this.speed;
    if (this.y > window.innerHeight + 100) {
      this.reset();
    }
  }
}

function startSakura() {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cxt = canvas.getContext("2d");

  const sakuras = Array.from({ length: 100 }, () => new Sakura());

  function draw() {
    requestAnimationFrame(draw);
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    for (const sakura of sakuras) {
      sakura.update();
      sakura.draw(cxt);
    }
  }

  draw();
}

window.onload = startSakura;

console.log("gudong likes chenxiao a little bit");
