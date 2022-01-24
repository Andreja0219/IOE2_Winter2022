/* This sketch was develpoed using the Teachable Machine tutorial: https://www.youtube.com/watch?v=kwcillcWOg0
All code was written using reference from the p5.js library, adapted by Andreja Morrison 2022.*/
let video;
let classifier;
let label = 'waiting';
let dim;
let input, button, greeting;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BLuCjMZdf/'
let rav4;
let charger;
let nova;
let eight;
let lock;

class Car {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(cColor, x, y) {
    this.color = cColor;
    this.doors = 4;
    this.isConvertible = false;
    this.x = x;
    this.y = y;
    this.speed = 0;
  }

  start(speed) { // method expects parameter!
    this.speed = speed;
  }

  display() { // method!
    fill(this.color);
    rect(this.x, this.y, 20, 10);
  }

  move() { // method!
    this.x += this.speed;
    // Wrap x around boundaries
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }
} //end class Car

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

  rav4 = new Car("silver", 100, 300);
  charger = new Car("gold", 0, 200);  
  nova = new Car("blue", 200, 100); 
  nova.doors = 2; //update nova's doors property
  eight = new Car("pink", 300, 400);
  lock = new Car("green", 50, 500);
  

  rav4.start(2.3);
  charger.start(-4);
  nova.start(random(-1, 1));
  eight.start(1);
  lock.start(-6);

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
  rav4.display();
  rav4.move();
 
} 

else if (label== 'casette'){
  charger.display();
  charger.move();
  
} 

else if (label == 'CutiePie'){
  nova.display();
  nova.move();
  
} 

else if (label== '8Ball'){
  eight.display();
  eight.move();

} 

else if (label== 'Locket'){
  lock.display();
  lock.move();
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


