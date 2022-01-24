/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';

let slider;
let input, button, greeting;
// Initialize new SpeechSynthesisUtterance object
const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'en';
utterance.pitch = 1.5;
utterance.rate = 5;
speechSynthesis.speak(utterance)


let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'
function preload(){

 
//classifier = ml5.imageClassifier(i '');

classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
function setup(){
  createCanvas(windowWidth, windowHeight);

  video= createCapture(VIDEO);
  video.hide();

  classifyVideo();

  slider = createSlider(0, 1, 1, 0.1); //volume control
  slider.position(10, 10);
  slider.style('width', '800px');


  // button.position(input.x + 947, + input.y + 100);
  // button.mousePressed(greet);


  textAlign(CENTER);
  textSize(50);

}

function classifyVideo(){
classifier.classify(video, gotResults);
}


function draw(){
  background(0);
  image(video,100,100);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height -16);
filter(OPAQUE);
  
console.log(slider.value());
greet();


  // if (label== 'Ring'){
  //    greet();
  // } else if (label== 'casette'){
  //   greet();
  // } else if (label == 'CutiePie'){
  //   greet();
  // }

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

function keyPressed() {
  if (keyCode === DELETE) {
    remove(input.value());
  } 
}

function greet() {
  classifyVideo();
  utterance.text = label;
  

  utterance.volume = slider.value();

  window.speechSynthesis.speak(utterance);
  

  console.log('story: ', utterance.text);
}
