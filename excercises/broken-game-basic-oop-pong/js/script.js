// Broken Basic OO Pong
// by Pippin Barr
//
// A broken primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
/////FIXED ERROR 11: Typo 'ball'/////
var ball;
/////END FIXED ERROR 11/////
var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
  /////FIXED ERROR 10 (ACCORDING TO CONSOLE): Wrong creatCanvas() syntax/////
  createCanvas(640,480);
  /////END FIXED ERROR 10/////
  noStroke();
  // Create a ball
  /////FIXED ERROR 24: Adjust the speed of the ball so the paddles can hit it/////
  ball = new Ball(width/2,height/2,50,50,10,5);
  /////END FIXED ERROR 24/////
  // Create the right paddle with UP and DOWN as controls
  /////FIXED ERROR 23: Adjust the height of the right paddle to
  /////make it appear on canvas
  rightPaddle = new Paddle(width-10,height/2,10,60,10,UP_ARROW,DOWN_ARROW);
  /////END FIXED ERROR 23/////
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
  /////FIXED ERROR 16: Missing closure ')'/////
}
/////END FIXED ERROR 16/////

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();
  /////FIXED ERROR 1 (ACCORDING TO CONSOLE): Missing the '()' for ball update/////
  ball.update();
  /////END FIXED 1/////
  leftPaddle.update();
  rightPaddle.update();
  /////FIXED ERROR 17: Missing one opening curly bracket/////
  /////FIXED ERROR 20: Mistype 'ballIsOffScreen'/////
  if (ball.isOffScreen()){
    /////END FIXED ERROR 17/////
    /////END FIXED ERROR 20/////

  /////FIXED ERROR 29: Mistype 'ball.reset()'/////
    ball.reset();
  /////END FIXED ERROR 29/////
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  /////FIXED ERROR 9 (ACCORDING TO CONSOLE): Missing ')'
  rightPaddle.display();
  /////END FIXED ERROR 9/////
}
