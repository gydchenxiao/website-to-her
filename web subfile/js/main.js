class Sakura {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Sakura.randomRange(0, window.innerWidth);
    this.y = Sakura.randomRange(-200, -50);
    this.speed = Sakura.randomRange(0.3, 1);
    this.angle = Sakura.randomRange(0, Math.PI * 2);
    this.size = Sakura.randomRange(3, 5); // 限制在较小的范围
  }

  static randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.scale(this.size / 10, this.size / 10);

    cxt.beginPath();
    cxt.moveTo(5, 0);
    cxt.bezierCurveTo(5, 5, 10, 15, 15, 5);
    cxt.bezierCurveTo(20, -5, 15, -15, 10, -5);
    cxt.bezierCurveTo(5, -15, 0, -5, 0, 0);
    cxt.closePath();

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
  const cxt = canvas.getContext("2d");

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

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

// 生成烟花粒子
function createFirework(event) {
  const numParticles = 30; // 烟花粒子的数量
  const particles = [];

  // 设置粒子位置和动画效果
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // 随机颜色
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // 粒子起始位置
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;

    // 设置随机爆炸方向
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200;
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    // 将粒子添加到文档
    document.body.appendChild(particle);
    particles.push(particle);
  }

  // 移除动画完成的粒子
  setTimeout(() => {
    particles.forEach((particle) => {
      particle.remove();
    });
  }, 1000); // 与动画时长一致
}

// 添加点击事件监听器
document.addEventListener("click", createFirework);
console.log("gudong likes chenxiao a little bit");
