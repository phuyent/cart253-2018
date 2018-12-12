//Rock
//
//A class to define the rock's behavior.

//Rock constructor
//
//Set the rock function
function Rock() {
  this.x = random(100,700);
  this.y = random(100,500);
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
  this.handleCollision = function(monster) {
    // Check if the monster overlaps the rock on x axis
    if (this.x + this.size > monster.x && this.x < monster.x + monster.w) {
      // Check if the monster overlaps the rock on y axis
      if (this.y + this.size > monster.y && this.y < monster.y + monster.h) {
        // If so, shrink the monster size
        monster.size -=2;
        //Minus point to the monster
        monster.score -=1;
      }
    }
  };
}
//I wrote this arrays according to p5 example
//Source: https://p5js.org/examples/objects-array-of-objects.html
