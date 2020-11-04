let mic, amp, song;
let volHistory = [];
function preload() {  
  song = loadSound('sounds/arise.mp3');
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // background(100);
  song.play();
  //mic = new p5.AudioIn();
  amp = new p5.Amplitude();
  //mic.start();
  angleMode(DEGREES);
  background(0);
  textSize(32);
  fill(255, 255, 255);
  text('Click to activate the page', 3*window.innerWidth/8, 35);
}
function touchStarted() {
  getAudioContext().resume();
}
function draw() {
  let vol = amp.getLevel();
  volHistory.push(vol);
  translate(width/2, height/2)
  noFill();
  beginShape();
  for (let i = 0; i < 360; i++) {
    stroke(255);
    console.log(volHistory[i]);
    let r = map(volHistory[i], 0, 1, 10, 300);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if(volHistory.length > 360) {
    volHistory = [];
    console.log('reset');
  }
}