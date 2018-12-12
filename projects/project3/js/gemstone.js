//Gemstone
//
//A class to define the food's behavior

//Gemstone constructor
//
//Set the properties
function Gemstone() {
  this.x = random(50,600);
  this.y = random(50,400);
  this.diameter = random(10, 30);
  this.speed = 1;
  this.update = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.displayLevelOne = function() {
    //Set default gems in level 1 to be green
    push();
    noStroke();
    colorMode(RGB);
    fill(0,255,90);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  };
  this.displayLevelTwo = function() {
    //Set default gems in level 2 to be blue
    push();
    noStroke();
    colorMode(RGB);
    fill(0,0,215);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  };
  this.displayLevelThree = function() {
    //Set default gems in level 3 to be yellow
    push();
    noStroke();
    colorMode(RGB);
    fill(180,212,0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  };
}
