// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

/////FIXED ERROR 5 (ACCORDING TO CONSOLE): Miss '//' before the comments/////
//Paddle constructor
//Sets the properties with the provided arguments or defaults
/////END ERROR 5/////

/////FIXED ERROR 7( ACCORDING TO CONSOLE): Misspell 'Paddle'/////
function Paddle(x,y,w,h,speed,downKey,upKey) {
/////END FIXED ERROR 7/////
  this.x = x;
  this.y = y;
  this.xv = 0;
/////FIXED ERROR 21: Mistype 'this.vy'/////
  this.vy = 0;
/////END FIXED ERROR 21/////
  this.w = w;
  this.h = h;
/////FIXED ERROR 8: Mispell 'speed'/////
  this.speed = speed;
/////END FIXED ERROR 8/////
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
/////FIXED ERROR 18 (ACCORDING TO CONSOLE): Unidentified 'upKey' and 'downKey' & mistype 'keyIsDown'/////
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = -this.speed;
/////END FIXED ERROR 18/////
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
/////FIXED ERROR 19: Misspell 'constrain' & 'height'/////
  this.y = constrain(this.y,0,height-this.h);
/////END FIXED ERROR 19/////
}

// display()
//
// Draw the paddle as a rectangle on the screen
/////FIXED ERROR 6 (ACCORDING TO CONSOLE): Misspell 'display' & a redundant ')' in function() & wrong rect() syntax/////
Paddle.prototype.display = function() {
/////FIXED ERROR 15: No color for the paddles/////
fill(255);
/////END FIXED ERROR 15/////

  rect(this.x,this.y,this.w,this.h);
/////END FIXED ERROR 6/////
}
