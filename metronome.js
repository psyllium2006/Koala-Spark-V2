// 📁 metronome.js｜Koala Spark V2 音樂節拍器 初始邏輯

let audioContext;
let intervalId = null;
let bpm = 120;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const bpmInput = document.getElementById('bpmInput');

startBtn.addEventListener('click', startMetronome);
stopBtn.addEventListener('click', stopMetronome);
bpmInput.addEventListener('change', () => {
  bpm = parseInt(bpmInput.value);
});

function startMetronome() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const interval = 60000 / bpm; // 間隔時間 (毫秒)
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'square';
    osc.frequency.value = 1000;
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + 0.05);
  }, interval);
}

function stopMetronome() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
