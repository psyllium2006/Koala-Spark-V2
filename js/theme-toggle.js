// 🌙 Koala Spark V2 - 主題切換模組

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// 預設開啟頁面時根據系統主題自動套用
window.onload = function () {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
};
