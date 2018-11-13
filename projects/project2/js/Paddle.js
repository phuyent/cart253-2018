// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
///NEW CODE PART 3: NEW SCORE PROPERTIES, NEW PADDLE IMAGE///
function Paddle(x,y,w,h,speed,score,scorePositionX,scorePositionY,downKey,upKey,paddleImage) {
  ///END NEW CODE PART 3///
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
  ///NEW CODE PART 3: Add score to keep up the points ///
  this.score = score;
  this.scorePositionX = scorePositionX;
  this.scorePositionY = scorePositionY;
  this.paddleImage = paddleImage;

  ///END NEW CODE PART 3///
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() {
///NEW CODE PART 3: Change the paddle visuals///
  image(this.paddleImage,this.x,this.y,this.w,this.h);
///END NEW CODE PART 3///
}
///NEW CODE PART 3: Set up new function to display score by text///
//Display the score at the top of the canvas
Paddle.prototype.scoreDisplay = function() {
  text('Score: ' + this.score,this.scorePositionX,this.scorePositionY);
  textSize(20);
  fill(255);
}
///END NEW CODE PART 3///
