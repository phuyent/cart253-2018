//Rock
//
//A class to define the enemy's behavio.

//Rock constructor
//
//Set the enemy properties
function Rock (x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed= speed;
}
// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
Rock.prototype.update = function () {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the rock has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Rock.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

// display()
//
// Draw the ball as a rectangle on the screen
Rock.prototype.display = function () {
  noStroke();
  colorMode(RGB, 100);
  ellipse(this.size,this.size,this.size,this.size);
}
// handleCollision(monster)
//
// Check if this gemstone overlaps monster passed as an argument
// and if so reverse x velocity to bounce
Rock.prototype.handleCollision = function(monster) {
  // Check if the monster overlaps the rock on x axis
  if (this.x + this.size > monster.x && this.x < monster.x + monster.w) {
    // Check if the ball overlaps monster on y axis
    if (this.y + this.size > monster.y && this.y < monster.y + monster.h) {
      // If so, shrink the monster size
      monster.size +=2;
      //Minus point to the monster
      monster.score +=1;
    }
  }
}
// reset()
//
// Set position back to the middle of the screen
Rock.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
