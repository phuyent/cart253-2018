// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;
//PART 2 NEW: DEFINE DIRECTIONS WITH CONST SO IT DOES NOT CHANGE OVER TIME//
const GO_LEFT = 1;
const GO_RIGHT = 2;
const ON_SCREEN = 3;
//END PART 2 NEW//

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  //PART 3 NEW: Add the beginning score to be zero, add x position to each paddle
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW,0,450);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87,0,50);
  //PART 3 END NEW//
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);
  //PART 3 NEW: DISPLAY SCORE//
  //If the ball falls off the left side//
  if ((ball.isOffScreen() === 1)) {
    //Reset ball
    ball.reset();
    //Add one score to the right side//
    rightPaddle.score += 1;
  }
  //If the ball falls off the right side//
  if (ball.isOffScreen() === 2) {
    //Reset ball
    ball.reset();
    //Add one score to the left side //
    leftPaddle.score += 1;
  }
  //END PART 3 NEW//

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();


  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();

  //PART 3 NEW: DISPLAY SCORE//
  leftPaddle.displayScore();
  rightPaddle.displayScore();
  //END PART 3 NEW//
}
