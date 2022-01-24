/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';

let imageModelURL = 'https://teachablemachine.withgoogle.com/models/SxWjsA8M1/'
function preload(){

 
//classifier = ml5.imageClassifier(i '');

classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
function setup(){
  createCanvas(640, 520);

  video= createCapture(VIDEO);
  video.hide();

  classifyVideo();
}

function classifyVideo(){
classifier.classify(video, gotResults);
}


function draw(){
  background(0);
  image(video,0,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height -16);

  let emoji = '🎱';

  if (label== 'Rubiks cube'){
    emoji = '🟪';
  }
  textSize(256);
  text(emoji, width/2, height/2);


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