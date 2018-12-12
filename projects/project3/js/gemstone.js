//Gemstone
//
//A class to define the food's behavior

//Gemstone constructor
//
//Set the properties
function Gemstone() {
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
    fill(0,0,215);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  };
  this.handleCollision = function(monster) {
    // Check if the monster overlaps the rock on x axis
    if (this.x + this.size > monster.x && this.x < monster.x + monster.w) {
      // Check if the monster overlaps the rock on y axis
      if (this.y + this.size > monster.y && this.y < monster.y + monster.h) {
        // If so, shrink the monster size
        monster.size +=5;
        //Minus point to the monster
        monster.score +=1;
      }
    }
  };
}
