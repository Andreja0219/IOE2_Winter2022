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
  
// console.log(slider.value());

  if (label== 'Ring'){
    background(255, 8, 160);
  } else if (label== 'casette'){
    background(8, 214, 255);
  } else if (label == 'CutiePie'){
    background(255, 226, 8);
  } else if (label== '8Ball'){
    background(252, 83, 5);
  } else if (label== 'Locket'){
    background(5, 63, 252);
  }
 
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

// function greet() {
//   classifyVideo();
//   utterance.text = label;
  

//   utterance.volume = slider.value();

//   window.speechSynthesis.speak(utterance);
  

//   console.log('story: ', utterance.text);
// }
