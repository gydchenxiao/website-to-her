    document.addEventListener("DOMContentLoaded", function () {
      var bgImages = [
        "url(./img/background1.png)",
        "url(./img/background2.webp)",
        "url(./img/background3.jpg)",
        "url(./img/background4.png)",
        "url(./img/background5.jpg)",
        "url(./img/background6.jpg)",
        "url(./img/background7.jpg)",
      ];

      var currentIndex = 0;

      function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % bgImages.length;
        document.body.style.backgroundImage = bgImages[currentIndex];
      }

      // 给ID为changeBg的元素绑定点击事件
      document
        .getElementById("changeBg")
        .addEventListener("click", changeBackgroundImage);
    });

// 通过JavaScript为按钮添加点击事件监听器
document.getElementById("nextPageButton").addEventListener("click", function()  // 当按钮被点击时，导航到指定的HTML文件
{     
    window.open("./web subfile/vless.html", "_blank");
});

const musicButton = document.getElementById('musicButton');
const container3 = document.querySelector('.container3'); 
const changeBgButton = document.getElementById('changeBg');
const nextPageButton = document.getElementById('nextPageButton');

// 初始化音乐播放器的状态为隐藏
container3.style.display = 'none';

// 音乐按钮点击事件处理函数
musicButton.addEventListener('click', function() {
    if (container3.style.display === 'none') {
        container3.style.display = 'block'; // 显示音乐播放器
    } else {
        container3.style.display = 'none'; // 隐藏音乐播放器
      }
    });
