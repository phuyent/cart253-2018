// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function Ball(x,y,vx,vy,size,speed) {
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
/////FIXED ERROR 1: Misspell 'function', misspell 'update'/////
Ball.prototype.update = function () {
  /////END FIXED ERROR 1/////
  // Update position with velocity
  /////FIXED ERROR 12: Missing '+' for the ball x velocity/////
  this.x += this.vx;
  /////END FIXED ERROR 12/////
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  /////FIXED ERROR 13: Missing '==='/////
  if (this.y === 0 || this.y + this.size === height) {
    /////END FIXED ERROR 13/////
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {
  /////FIXED ERROR 2 (ACCORDING TO CONSOLE): Misspell 'if' & an unecessary '+'/////
  // Check for going off screen and reset if so
  /////FIXED ERROR 28: The conditions when the ball goes off the screen/////
  if (this.x + this.size < 0 || this.x > width) {
    /////END FIXED ERROR 28/////
    /////END FIXED ERROR 2/////
    return true;
  }
  else {
    return false;
  }
}

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function () {
  /////FIXED ERROR 14: Add color to the ball/////
  fill(255);
  /////END FIXED ERROR 14/////

  /////FIXED ERROR 3 (ACCORDING TO CONSOLE): Wrong rect() syntax/////
  rect(this.x,this.y,this.size,this.size);
}
/////END FIXED ERROR 3/////

// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
/////FIXED ERROR 4 (ACCORDING TO CONSOLE): A redundant '(' & misspell 'prototype'/////
Ball.prototype.handleCollision = function(paddle) {
  /////END FIXED ERROR 4/////
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      /////FIXED ERROR 30: Adjust the direction of the x velocity to bounce/////
      // Reverse x velocity to bounce
      this.vx = -this.vx;
      /////END FIXED ERROR 30/////
    }
  }
}

// reset()
//
// Set position back to the middle of the screen
/////FIXED ERROR 25: Misspell 'reset'/////
Ball.prototype.reset = function () {
  /////END FIXED ERROR 25/////
  this.x = width/2;
  this.y = height/2;
}
