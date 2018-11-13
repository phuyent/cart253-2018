// // Basic OO Pong
// // by Pippin Barr
// //
// // A primitive implementation of Pong with no scoring system
// // just the ability to play the game with the keyboard.
// //
// // Arrow keys control the right hand paddle, W and S control
// // the left hand paddle.
// //
// // Written with JavaScript OOP.
//
//Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;
///NEW CODE PART 3: Improve visuals///
var ballImage;
var rightPaddleImage;
var leftPaddleImage;
var newBackground;
var sound;

//preload()
//
//Preload images before the program runs
function preload(){
  ballImage = loadImage('assets/images/koi.png');
  rightPaddleImage = loadImage('assets/images/rod1.png');
  leftPaddleImage = loadImage('assets/images/rod2.png');
  newBackground = loadImage('assets/images/underwater.png');
  sound = new Audio('assets/sounds/sea_sound.mp3');
  ///END NEW CODE PART 3///
}

//setup()
//
//Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  //Create a ball
  ball = new Ball(width/2,height/2,5,5,50,5);
  //Create the right paddle with UP and DOWN as controls
  ///NEW CODE PART 3: Start score at 0, add x & y position to dispay the score by text, add sound///
  rightPaddle = new Paddle(width-100,height/2,80,100,10,0,480,40,DOWN_ARROW,UP_ARROW,rightPaddleImage);
  //Create the left paddle with W and S as controls
  //Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(30,height/2,80,100,10,0,100,40,83,87,leftPaddleImage);
  //Play music throughout the game
  sound.play();
  ///END NEW CODE PART 3///
}


//draw()
//
//Handles input, updates all the elements, checks for collisions
//and displays everything.
function draw() {
  ///NEW CODE PART 3: Change background///
  image(newBackground,0,0,640,480);
  ///END NEW CODE PART 3///

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
///NEW CODE PART 3: Display score///
  leftPaddle.scoreDisplay();
  rightPaddle.scoreDisplay();
///END NEW CODE PART 3///
}
