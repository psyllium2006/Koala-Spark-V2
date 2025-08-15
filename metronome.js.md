# metronome.js

```jsx
<!-- 📁 index.html｜Koala Spark V2 音樂節拍器 初始版本 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Koala Spark V2</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Koala Spark V2 🐨🎵</h1>
  <p>歡迎進入 Maxine 家族的語音節拍器宇宙！</p>

  <div id="controls">
    <button id="startBtn">開始節拍</button>
    <button id="stopBtn">停止節拍</button>
    <input type="number" id="bpmInput" value="120" min="30" max="240"> BPM
  </div>

  <div id="visualizer"></div>

  <script src="js/metronome.js"></script>
</body>
</html>

```