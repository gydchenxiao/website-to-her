function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createSakura() {
  this.x = randomRange(0, window.innerWidth);
  this.y = randomRange(-200, -50);
  this.speed = randomRange(0.3, 1);
  this.angle = randomRange(0, Math.PI * 2);
  this.size = randomRange(3, 7);

  this.draw = function(cxt) {
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
    var gradient = cxt.createLinearGradient(0, 0, 0, -this.size * 10);
    gradient.addColorStop(0, "#FFB6C1");
    gradient.addColorStop(1, "rgba(255, 182, 193, 0)");
    cxt.fillStyle = gradient;
    cxt.fill();

    cxt.restore();
  };

  this.update = function() {
    this.y += this.speed;
    if (this.y > window.innerHeight + 100) {
      this.y = randomRange(-200, -50);
      this.x = randomRange(0, window.innerWidth);
      this.speed = randomRange(0.3, 1);
      this.angle = randomRange(0, Math.PI * 2);
    }
  };
}

function startSakura() {
  var canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var cxt = canvas.getContext("2d");

  var sakuras = [];
  for (var i = 0; i < 100; i++) {
    sakuras.push(new createSakura());
  }

  function draw() {
    requestAnimationFrame(draw);
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < sakuras.length; i++) {
      sakuras[i].update();
      sakuras[i].draw(cxt);
    }
  }

  draw();
}

window.onload = function() {
  startSakura();
};

document.getElementById("lastPageButton").addEventListener("click", function() {
    
    window.location.href = "./blessing.html";// 当按钮被点击时，导航到指定的HTML文件
});



