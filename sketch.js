var hr = hour();
var min = minute();
var sec = second();
var secAngle, hrAngle, minAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

  secAngle = map(sec,0,60,0,360);
  hrAngle = map(hr%12,0,60,0,360);
  minAngle = map(min,0,60,0,360);

}

function draw() {
  background(0,0,0);  

  angleMode(DEGREES);
  drawSprites();
}