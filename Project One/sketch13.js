/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';
let snowflakes = []; 
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
  fill(240);
  noStroke();
  
}

function classifyVideo(){
classifier.classify(video, gotResults);
}


function draw(){
  background("darkBlue");
  //image(video,0,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  
  text(label, width/2, height -16);
filter(OPAQUE);
let t = frameCount / 60; 

if (label== 'Ring'){
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

} else if (label== 'casette'){
  for (let i = 0; i < random(500); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

} else if (label == 'CutiePie'){
  for (let i = 0; i < random(30); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

} else if (label== '8Ball'){
  for (let i = 0; i < random(250); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
} else if (label== 'Locket'){
  for (let i = 0; i < random(2); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}
loop();
}
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
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


