//Rock
//
//A class to define the rock's behavior.

//Rock constructor
//
//Set the rock function
function Rock() {
  this.x = random(100,600);
  this.y = random(100,400);
  this.diameter = random(10, 30);
  this.speed = 1;
  this.update = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function() {
    //Set default for rocks to be gray
    push();
    noStroke();
    colorMode(RGB);
    fill(210,210,210);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  };
}
//I wrote this arrays according to p5 example
//Source: https://p5js.org/examples/objects-array-of-objects.html
