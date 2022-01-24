/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'
let gridSize;
function preload(){
classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup(){
  createCanvas(640, 520);
  // colorMode(HSB, 360, 100, 100);
  video= createCapture(VIDEO);
  video.hide();

  classifyVideo();

  textAlign(CENTER);
  textSize(50);
}

function classifyVideo(){
classifier.classify(video, gotResults);
}


function draw(){
  background(0);
  fill(255);
  // background("darkBlue");
  //image(video,0,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  
  text(label, width/2, height -16);
  let gridSize = 35;



if (label== 'Ring'){
  background(255);
  gridSize = 55;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
     
      fill("orange");
      stroke("orange");
      strokeWeight(3);
      line(x, width / 4, y, height / 2);
    }
  }
 
} else if (label== 'casette'){
  background(255);
  gridSize = 45;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {

      fill("pink");
      stroke("pink");
      strokeWeight(3);
      line(x, width / 7, y, height);
    }
  }
  
} else if (label == 'CutiePie'){
  background(255);
  gridSize = 30;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      
      fill("blue");
      stroke("blue");
      strokeWeight(3);
      line(x, width / 4, y, height + 3);
    }
  }
  
} else if (label== '8Ball'){
  background(255);
  gridSize = 10;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
    
      fill("lightGreen");
      stroke("lightGreen");
      strokeWeight(3);
      line(x, width / 6, y, height * 0.5);
    }
  }
  
} else if (label== 'Locket'){
  background(255);
  gridSize = 20;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
    
      fill("purple");
      stroke("purple");
      strokeWeight(3);
      line(x, width / 4, y, height / 4);
    }
  }
  
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
