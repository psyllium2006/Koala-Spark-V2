// 🐨 KoalaBop.js - 跟著節拍點頭的可愛考拉動畫模組

let koala;
let bopInterval;

function initKoalaBop() {
  koala = document.getElementById("koala");
  if (!koala) return;
}

function startKoalaBop(bpm) {
  stopKoalaBop();
  if (!koala) return;
  const interval = 60000 / bpm; // 毫秒換算成 BPM
  bopInterval = setInterval(() => {
    koala.classList.add("bop");
    setTimeout(() => koala.classList.remove("bop"), interval / 2);
  }, interval);
}

function stopKoalaBop() {
  clearInterval(bopInterval);
}

window.onload = () => {
  initKoalaBop();
};
