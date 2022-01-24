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
  background(0, 50);
  fill(255);
  // background("darkBlue");
  //image(video,0,0);
  // textSize(32);
  // textAlign(CENTER, CENTER);
  
  // text(label, width/2, height -16);
  let gridSize = 35;



if (label== 'Ring'){
  background(0, 50);
  gridSize = 180;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      rect(x - 1, y - 1, 150, 6);
      fill("orange");
      stroke("orange");
      strokeWeight(0.5);
      line(height / 2, width / 4, y, x); 
      line(x,y, width / 4, height + 3);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);  
      strokeWeight(0.5); 
      fill(255);
      stroke(255);
      line(y + 1, width / 2.5 + 1,  x + 1, height/1.5 +1);
      line(x +1,y +1, width / 4 +1, height + 4);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);
      strokeWeight(0.5); 
      fill("lightOrange");
      stroke("lightOrange");
      line((y + 2, width / 2.5 + 2,  x + 2, height/1.5 +2)*2);
      line((x +2,y +2, width / 4 +2, height + 5)*3);
      line((x+ 2, width / 6 + 2, y + 2, height * 0.5 + 2)*4);
      line((x + 2, width / 4 + 2, y + 2, height / 4 + 2)*5);
    }
  }
 
} else if (label== 'casette'){
  background(0, 50);
  gridSize = 120;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      rect(x - 1, y - 1, 6, 150);
      fill("pink");
      stroke("pink");
      strokeWeight(0.5);
      line(y, width / 2.5,  x, height/1.5);
      line(x,y, width / 4, height + 3);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);  
      strokeWeight(0.5); 
      fill(255);
      stroke(255);
      line(y + 1, width / 2.5 + 1,  x + 1, height/1.5 +1);
      line(x +1,y +1, width / 4 +1, height + 4);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);
      strokeWeight(0.5); 
      fill("red");
      stroke("red");
      line((y + 2, width / 2.5 + 2,  x + 2, height/1.5 +2)*2);
      line((x +2,y +2, width / 4 +2, height + 5)*3);
      line((x+ 2, width / 6 + 2, y + 2, height * 0.5 + 2)*4);
      line((x + 2, width / 4 + 2, y + 2, height / 4 + 2)*5);
    }
  }
  
} else if (label == 'CutiePie'){
  background(0, 50);
  gridSize = 160;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      rect(x - 1, y - 1, 30, 150);
      fill("blue");
      stroke("blue");
      strokeWeight(0.5);
      line(x,y, width / 4, height + 3); line(x,y, width / 4, height + 3);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);  
      strokeWeight(0.5); 
      fill(255);
      stroke(255);
      line(y + 1, width / 2.5 + 1,  x + 1, height/1.5 +1);
      line(x +1,y +1, width / 4 +1, height + 4);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);
      strokeWeight(0.5); 
      fill("lightBlue");
      stroke("lightBlue");
      line((y + 2, width / 2.5 + 2,  x + 2, height/1.5 +2)*2.5);
      line((x +2,y +2, width / 4 +2, height + 5)*3);
      line((x+ 2, width / 6 + 2, y + 2, height * 0.5 + 2)*3);
      line((x + 2, width / 4 + 2, y + 2, height / 4 + 2)/2);
    }
  }
  
} else if (label== '8Ball'){
  background(0, 50);
  gridSize = 175;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      rect(x - 1, y - 1, 60, 15);
      fill("lightGreen");
      stroke("lightGreen");
      strokeWeight(0.5);
      line(x, width / 6, y, height * 0.5); 
      line(x,y, width / 4, height + 3);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);  
      strokeWeight(0.5); 
      fill(255);
      stroke(255);
      line(y + 1, width / 2.5 + 1,  x + 1, height/1.5 +1);
      line(x +1,y +1, width / 4 +1, height + 4);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);
      strokeWeight(0.5); 
      fill("green");
      stroke("green");
      line((y + 2, width / 2.5 + 2,  x + 2, height/1.5 +2)/2);
      line((x +2,y +2, width / 4 +2, height + 5)*4);
      line((x+ 2, width / 6 + 2, y + 2, height * 0.5 + 2)*7);
      line((x + 2, width / 4 + 2, y + 2, height / 4 + 2)/.5);
    }
  }
  
} else if (label== 'Locket'){
  background(0, 50);
  gridSize = 190;
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      rect(x - 1, y - 1, 6, 6);
      fill("purple");
      stroke("purple");
      strokeWeight(0.5);
      line(x, width / 4, y, height / 4);
      line(x,y, width / 4, height + 3);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);  
      strokeWeight(0.5); 
      fill(255);
      stroke(255);
      line(y + 1, width / 2.5 + 1,  x + 1, height/1.5 +1);
      line(x +1,y +1, width / 4 +1, height + 4);
      line(x, width / 6, y, height * 0.5);
      line(x, width / 4, y, height / 4);
      strokeWeight(0.5); 
      fill("lightPurple");
      stroke("lightPurple");
      line((y + 2, width / 2.5 + 2,  x + 2, height/1.5 +2)*6);
      line((x +2,y +2, width / 4 +2, height + 5)*2);
      line((x+ 2, width / 6 + 2, y + 2, height * 0.5 + 2)*6);
      line((x + 2, width / 4 + 2, y + 2, height / 4 + 2)*3);
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
