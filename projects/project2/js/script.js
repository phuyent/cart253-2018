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
///NEW CODE PART 5: Add new kind of ball that should be avoid during the game///
var enemy;
var enemyImage;
///END NEW CODE PART 5///
///NEW CODE PART 5: BALL FOOD///
var food;
///END NEW CODE PART 5///
///NEW CODE PART 3: Improve visuals///
var ballImage;
var rightPaddleImage;
var leftPaddleImage;
var newBackground;
var sound;
///NEW CODE PART 4: ADD TITLE AND ENDING///
var state = 0 ;
///END NEW CODE PART 4///
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
  ///NEW CODE PART 5: Load the enemy image before the games starts///
  enemyImage = loadImage('assets/images/pink.png');
  foodImage = loadImage('assets/images/algae.png');
  ///END NEW CODE PART 5///
}

//setup()
//
//Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  //Create a ball
  ball = new Ball(width/2,height/2,random(-5,5),5,50,5);
  //Create the right paddle with UP and DOWN as controls
  ///NEW CODE PART 3: Start score at 0, add x & y position to dispay the score by text, add sound///
  rightPaddle = new Paddle(width-100,height/2,80,100,10,0,480,40,DOWN_ARROW,UP_ARROW,rightPaddleImage);
  //Create the left paddle with W and S as controls
  //Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(30,height/2,80,100,10,0,100,40,83,87,leftPaddleImage);
  ///END NEW CODE PART 3///
  ///NEW CODE PART 5: Set up the enemy ball///
  enemy = new Enemy(width/2,10,random(-5,5),random(-4,4),70,4);
  food = new Food(500,400,50);
  ///END NEW CODE PART 5///
  //Play music throughout the game
  sound.play();

}


//draw()
//
//Handles input, updates all the elements, checks for collisions
//and displays everything.
function draw() {
  ///NEW CODE PART 3: Change background///
  image(newBackground,0,0,640,480);
  ///END NEW CODE PART 3///
  ///NEW CODE PART 4: Using 'switch(state)' to create the opening & ending///
  switch (state) {
    case 0:
    gameTitle();
    break;

    case 1:
    gameLoop();
    break;

    case 2:
    gameEnd();
    break;
  }
}

function gameTitle(){
  fill(255);
  text('IT IS FISHING TIME!!!', width/2, height/3);
  text('Press SPACE BAR to start now', width/2, height/2);
  text('Catch 20 fish to be the winner', width/2, height*0.7);
  text('Watch out for the jellyfishes!!!',width/2,height*0.8);
  textFont('Georgia',30);
  textStyle(BOLD);
  textAlign(CENTER);
}

function gameLoop(){
  if (leftPaddle.score ===20){
    state=2;
  }
  if(rightPaddle.score ===20){
    state=2;
  }


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
  ///END NEW PART 3///

  ///NEW CODE PART 5///
  enemy.update();
  if (enemy.isOffScreen()) {
    enemy.reset();
  }
  enemy.handleCollision(leftPaddle);
  enemy.handleCollision(rightPaddle);
  enemy.display();

  food.display();
  food.handleCollision(ball);

  ///END NEW CODE PART 5///
}
function keyPressed(){
  if (keyCode === 32){
    state =1;
  }
  if (keyCode === 82){
    state =0;
  }
}

function gameEnd(){
  text('GAME OVER', width/2, height/2);
  text('Press R to restart game',width/2,height*0.4);
  textFont('Georgia',30);
  textStyle(BOLD);
  textAlign(CENTER);
}
///END NEW CODE PART 4///
