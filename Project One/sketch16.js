/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';
let snowflakes = []; 
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'
//Position of left hand side of floor
let base1;

//Position of right hand side of floor
let base2;
//Length of floor
//let baseLength;

// Variables related to moving ball
let position;
let velocity;
let r = 6;
let speed = 3.5;

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

  base1 = createVector(0, height - 150);
  base2 = createVector(width, height);
  //createGround();

  //start ellipse at middle top of screen
  position = createVector(width / 2, 0);

  //calculate initial random velocity
  velocity = p5.Vector.random2D();
  velocity.mult(speed);
  
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

fill(0, 12);
noStroke();
rect(0, 0, width, height);

//draw base
fill(200);
quad(base1.x, base1.y, base2.x, base2.y, base2.x, height, 0, height);

//calculate base top normal
let baseDelta = p5.Vector.sub(base2, base1);
baseDelta.normalize();
let normal = createVector(-baseDelta.y, baseDelta.x);
let intercept = p5.Vector.dot(base1, normal);

//draw ellipse
noStroke();
fill(255);
ellipse(position.x, position.y, r * 2, r * 2);

//move ellipse
position.add(velocity);

//normalized incidence vector
incidence = p5.Vector.mult(velocity, -1);
incidence.normalize();

// detect and handle collision with base
if (p5.Vector.dot(normal, position) > intercept) {
  //calculate dot product of incident vector and base top
  let dot = incidence.dot(normal);

  //calculate reflection vector
  //assign reflection vector to direction vector
  velocity.set( 2 * normal.x * dot - incidence.x,
    2 * normal.y * dot - incidence.y,
    0
  );
  velocity.mult(speed);

  // draw base top normal at collision point
  stroke(255, 128, 0);
  line(
    position.x,
    position.y,
    position.x - normal.x * 100,
    position.y - normal.y * 100
  );
}
//}

// detect boundary collision
// right
if (position.x > width - r) {
  position.x = width - r;
  velocity.x *= -1;
  background("hotPink");
}
// left
if (position.x < r) {
  position.x = r;
  velocity.x *= -1;
  background("black");
}
// top
if (position.y < r) {
  position.y = r;
  velocity.y *= -1;
  background("orange");

  //randomize base top
  base1.y = random(height - 100, height);
  base2.y = random(height - 100, height);
}


if (label== 'Ring'){
  r = 8;
  speed = 9;
  base1.y = (height - 100);
  base2.y = (height + 100);
} else if (label== 'casette'){
  r = 2;
  speed = 12;
  base1.y = (height - 10);
  base2.y = (height);
} else if (label == 'CutiePie'){
  r = 3;
  speed = 5;
  base1.y = (height + 15);
  base2.y = (height - 15);
} else if (label== '8Ball'){
  r = 7;
  speed = 8;
  base1.y = (height);
  base2.y = (height - 100);
} else if (label== 'Locket'){
  r = 1;
  speed = 19;
  base1.y = (height * 2);
  base2.y = (height - 50);
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


