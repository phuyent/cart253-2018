//Gemstone
//
//A class to define the food's behavior

//Gemstone constructor
//
//Set the properties
function Gemstone(x,y,size,speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
}
// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
Gemstone.prototype.update = function () {
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
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Gemstone.prototype.isOffScreen = function () {
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
Gemstone.prototype.display = function () {
  noStroke();
  colorMode(HSB,100);
  ellipse(this.size,this.size,this.size);
}

// handleCollision(monster)
//
// Check if this gemstone overlaps monster passed as an argument
// and if so reverse x velocity to bounce
Gemstone.prototype.handleCollision = function(monster) {
  // Check if the ball overlaps the  left paddle on x axis
  if (this.x + this.size > monster.x && this.x < monster.x + monster.w) {
    // Check if the ball overlaps monster on y axis
    if (this.y + this.size > monster.y && this.y < monster.y + monster.h) {
      // If so, expand the monster size
      this.size +=5;
      //Add point to the monster
      this.score +=1;
    }
  }
}

// reset()
//
// Set position back to the middle of the screen
Gemstone.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
