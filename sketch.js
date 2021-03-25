var hr, min, sec;
var secAngle, hrAngle, minAngle;

function setup() {

  createCanvas(400,450);
  angleMode(DEGREES);

}

function draw() {
  background(0,0,0);  

  translate(200,200);
  rotate(-90);

  //Calculating time using a predefined function from p5.js
  hr = hour();
  min = minute();
  sec = second();

  //To create rotation
  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  //DRAWING THE HANDS OF THE CLOCK

  //creating seconds hand
  push();
  rotate(secAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //creating minutes hand
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //creating hours hand
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(7);
  noFill();

  //arc for seconds hand
  stroke("blue");
  arc(0,0,300,300,0,secAngle);

  //arc for minutes hand
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);

  //arc for hours hand
  stroke("red");
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}
