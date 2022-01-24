/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';
let a = 0.0;
let s = 0.0;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'

function preload(){
classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup(){
  createCanvas(640, 520);

  video= createCapture(VIDEO);
  video.hide();

  classifyVideo();

  textAlign(CENTER);
  textSize(50);

  rectMode(CENTER);
}

function classifyVideo(){
classifier.classify(video, gotResults);
}


function draw(){
  background(0);
  //image(video,0,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height -16);
filter(OPAQUE);
  
a = a + 0.04;
s = cos(a) * 2;

// translate(width / 2, height / 2);

rect(10, 10, 50, 50);

// translate(75, 0);



if (label== 'Ring'){
  scale(s);
  fill(255);
  rect(100, 100, 50, 50);


} else if (label== 'casette'){
  scale(s*2);
  fill(255);
  rect(100, 100, 50, 50);

} else if (label == 'CutiePie'){
  scale(s*3);
  fill(255);
  rect(100, 100, 50, 50);

} else if (label== '8Ball'){
  scale(s*4);
  fill(255);
  rect(100, 100, 50, 50);

} else if (label== 'Locket'){
  scale(s*5);
  fill(255);
  rect(100, 100, 50, 50);

}
loop();
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
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


