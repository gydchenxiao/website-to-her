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
