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
  background("gray");
  //image(video,0,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height -16);
filter(OPAQUE);
  
line(0, a, width, a);
stroke("slateBlue");
strokeWeight(random());
a = a - 0.5;


if (label== 'Ring'){
  line(0, a, width, a);
  stroke("pink");
  strokeWeight(3);
  a = a - 0.5;

  redraw();
  loop();

} else if (label== 'casette'){
  line(0, a, width, a);
  stroke("green");
  strokeWeight(11);
  a = a - 0.5;

  redraw();
  loop();
} else if (label == 'CutiePie'){
  line(0, a, width, a);
  stroke("red");
  strokeWeight(9);
  a = a - 0.5;

  redraw();
  loop();
} else if (label== '8Ball'){
  line(0, a, width, a);
  stroke("orange");
  strokeWeight(13);
  a = a - 0.5;

  redraw();
  loop();
} else if (label== 'Locket'){
  line(0, a, width, a);
  stroke("yellow");
  strokeWeight(30);
  a = a - 0.5;

  redraw();
  loop();
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


