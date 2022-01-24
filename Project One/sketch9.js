/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';

// let slider;
let input, button, greeting;
// Initialize new SpeechSynthesisUtterance object
// const utterance = new SpeechSynthesisUtterance();
// utterance.lang = 'en';
// utterance.pitch = 1.5;
// utterance.rate = 5;
// speechSynthesis.speak(utterance)


let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'
function preload(){

 
//classifier = ml5.imageClassifier(i '');

classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
function setup(){
  createCanvas(640, 520);

  video= createCapture(VIDEO);
  video.hide();

  classifyVideo();

  // slider = createSlider(0, 255); //volume control
  // slider.position(10, 10);s
  // slider.style('width', '800px');


  // button.position(input.x + 947, + input.y + 100);
  // button.mousePressed(greet);
  a = height / 2;

  textAlign(CENTER);
  textSize(50);

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
  



if (label== 'Ring'){
  push();
  fill("pink");
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);
  pop();


} else if (label== 'casette'){
  push();
  fill("pink");
  translate(width * 0.5, height * 0.5);
  rotate(frameCount );
  polygon(0, 0, 80, 20);
  pop();

} else if (label == 'CutiePie'){
  push();
  fill("hotPink");
  translate(width * 0.5, height * 0.5);
  rotate(frameCount * 2);
  polygon(0, 0, 80, 20);
  pop();

} else if (label== '8Ball'){
  push();
  fill("darkPink");
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 500.0);
  polygon(0, 0, 80, 20);
  pop();

} else if (label== 'Locket'){
  push();
  fill("lightPink");
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 20.0);
  polygon(0, 0, 80, 20);
  pop();

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


