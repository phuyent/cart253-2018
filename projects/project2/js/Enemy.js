//Enemy Ball
//
// A class to define how a enemy ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Enemy Ball constructor
//
// Sets the properties with the provided arguments
function Enemy(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
Enemy.prototype.update = function () {
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
// Checks if the enemy has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Enemy.prototype.isOffScreen = function () {
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
Enemy.prototype.display = function () {
  image(enemyImage,this.x, this.y,this.size,this.size);
}

// handleCollision(paddle)
//
// Check if this enemy overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Enemy.prototype.handleCollision = function(paddle) {
  ///NEW CODE PART 3: See if the ball overlaps any paddles & plus 1 point per successful hit///
  ///NEW CODE PART 5: When the enemy overlaps///
  // Check if the enemy overlaps the  left paddle on x axis
  if (this.x + this.size > leftPaddle.x && this.x < leftPaddle.x + leftPaddle.w) {
    // Check if the enemy overlaps the left paddle on y axis
    if (this.y + this.size > leftPaddle.y && this.y < leftPaddle.y + leftPaddle.h) {
      // If so, move enemy back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
      //Minus point to the left paddle
      leftPaddle.score -=1;
      //The left paddle can move out after one successful hit
      leftPaddle.x -=2;
    }
  }
  // Check if the enemy overlaps the  right paddle on x axis
  if (this.x + this.size > rightPaddle.x && this.x < rightPaddle.x + rightPaddle.w) {
    // Check if the ball overlaps the right paddle on y axis
    if (this.y + this.size > rightPaddle.y && this.y < rightPaddle.y + rightPaddle.h) {
      // If so, move enemy back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
      //Minus point to the right paddle
      rightPaddle.score -=1;
      //The right paddle can move out after one successful hit
      rightPaddle.x +=2 ;
      ///END NEW CODEPART 3///

    }
  }
}

// reset()
//
// Set position back to the middle of the screen
Enemy.prototype.reset = function () {
  ///NEW CODE PART 5: The enemy can appear anywhere///
  this.x = random(20,640);
  this.y = random(20,450);
}
  ///END NEW CODE PART 5///
