/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';
let dim;
let input, button, greeting;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'
function preload(){
classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup(){
  createCanvas(640, 520);

  video= createCapture(VIDEO);
  video.hide();

  classifyVideo();

  dim = width / 2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
 
  textAlign(CENTER);
  textSize(50);

}

function classifyVideo(){
classifier.classify(video, gotResults);
}

function draw(){
  background(255);
  //image(video,0,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height -16);
filter(OPAQUE);
  
for (let x = 0; x <= width; x += dim) {
  drawGradient(x, height / 2);
}
}

function drawGradient(x, y) {
let radius = dim / 2;
let h = random(0, 360);
for (let r = radius; r > 0; --r) {
  fill(h, 50, 90);
  ellipse(x, y, r, r);
  h = (h + 1) % 360;
}


if (label== 'Ring'){
  radius = dim * 3;
  h = (0, 72);
  for (let r = radius; r > 0; --r) {
    fill(h, 50, 90);
    rect(x, y, r, r);
    h = (h + 1) % 360;
  }
  
  redraw();
} 

else if (label== 'casette'){
  radius = dim * 2.5;
  h = (0, 144);
  for (let r = radius; r > 0; --r) {
    fill(h, 50, 90);
    rect(x, y, r, r);
    h = (h + 1) % 360;
  }
  redraw();
} 

else if (label == 'CutiePie'){
  radius = dim * 4;
  h = (0, 216);
  for (let r = radius; r > 0; --r) {
    fill(h, 50, 90);
    rect(x, y, r, r);
    h = (h + 1) % 360;
  }
  redraw();
} 

else if (label== '8Ball'){
  radius = dim * 5;
  h = (0, 278);
  for (let r = radius; r > 0; --r) {
    fill(h, 50, 90);
   rect(x, y, r, r);
    h = (h + 1) % 360;
  }
  redraw();
} 

else if (label== 'Locket'){
  radius = dim * 6;
  h = (0, 350);
  for (let r = radius; r > 0; --r) {
    fill(h, 50, 90);
    rect(x, y, r, r);
    h = (h + 1) % 360;
  }
  redraw();
}
loop();
}


function gotResults(error, results){
if (error){
console.error(error);
return
}
label = results[0].label;
console.log(results[0].label);
classifyVideo();
}


