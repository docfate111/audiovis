let mic;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // background(100);
  mic = new p5.AudioIn();
  mic.start();
  text('Click to start', 20, 20);
  background(255);
}

function touchStarted() {
  getAudioContext().resume();
}

function draw() {
  let vol = mic.getLevel();
  ellipse(height/2, width/2, vol*5000, vol*5000);
  console.log('volume', 5000*vol);
}