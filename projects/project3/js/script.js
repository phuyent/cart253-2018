
////***PROJECT 3: THE HOLY GRAND FINALE***////
//Huyen Tran Pham

//This is a 3-level game with a scoring system, each level has one specific theme.
//The monster will get bigger when it overlaps (eats) the gemstone on the canvas.
//Depending on the theme of the level, the objects will be different.
//There will be threats needed to avoid called Rock.
//The player can only pass if he/she reaches the level goal under 60 seconds.
//The idea of the game is a monster collecting precious stones in various places.

////***LET'S START***////
//Set a timer to start from 60
let timer = 60;
//Start the state of the game at 0
var state = 0;
//Variables to contain the objects
var monster;
var monsterImage;
//Array containing mutiple colored gemstones
var gemstone = [
  new Gemstone(10,10,2,2,10,2),
  new Gemstone(20,10,2,2,10,2),
  new Gemstone(30,10,2,2,10,2),
  new Gemstone(40,10,2,2,10,2),
  new Gemstone(50,10,2,2,10,2),
  new Gemstone(60,10,2,2,10,2),
  new Gemstone(70,10,2,2,10,2),
  new Gemstone(80,10,2,2,10,2),
  new Gemstone(90,10,2,2,10,2),
  new Gemstone(100,10,2,2,10,2),
  new Gemstone(110,10,2,2,10,2),
  new Gemstone(120,10,2,2,10,2),
  new Gemstone(130,10,2,2,10,2),
  new Gemstone(140,10,2,2,10,2),
  new Gemstone(150,10,2,2,10,2)
];
//Start rock with an empty array to later define its position
var rock =[];
//Three backgrounds for 3 levels and the title background
var background0;
var background1;
var background2;
var bachground3;
//A specific opening song that pairs ell with my eating theme
var openMusic;

// preload()
//
// Load the images and music before the program runs
function preload() {
  //The opening song
  openMusic = new Audio('assets/sounds/nom-nom-song.mp3');
  background0 = loadImage('assets/images/bg0.png');
  background1 = loadImage('assets/images/bg1.jpg');
  background2 = loadImage('assets/images/bg2.jpg');
  background3 = loadImage('assets/images/bg3.jpg');
  monsterImage = loadImage('assets/images/monster.png');
}


// setup()
//
//Create the monster and objects for each level
function setup() {
  createCanvas(800,600);
  //Create the gemstone
  gemstone = new Gemstone(150,150,10,5);
  //Create the rock
  rock = new Rock(100,100,5,5,10,5);
  //Create the monster
  monster = new Monster(width/2,height-100,80,70,70,10,0,100,90,38,40,37,39,monsterImage);
}


// draw()
//
//Handles input, updates all the elements, checks for collisions
//and displays everything.

function draw() {
  switch(state) {
    case 0:
    gameTitle();
    break;

    case 1:
    levelOne();
    break;

    case 2:
    levelTwo();
    break;

    case 3:
    levelThree();
    break;

    case 4:
    gameEnd();
    break;
  }
}
function gameTitle(){
  image(background0,0,0,windowWidth,windowHeight);
  fill(255);
  text('THE GEM EATER', width/2, height/2);
  text('Join in to be the master of power',width/2, height*0.6);
  text('Press spacebar to start eating!!!',width/2, height*0.7);
  textFont('Georgia',30);
  textStyle(BOLD);
  textAlign(CENTER);
}
function levelOne() {
  ////***Level 1 theme will be on land, searching for the green and red gemstones***////
  //New background to pair with the theme
  push();
  imageMode(CORNERS);
  image(background1,0,0,windowWidth,windowHeight);
  //Display the goal at the top right of the canvas
  text ('Eat 5 gemstone to pass',600,50);
  pop();
  ////Handles input, updates all the elements, checks for collisions
  //and displays everything.
  monster.handleInput();

  monster.update();
  gemstone.update();
  rock.update();

  if (monster.isOffScreen()) {
    monster.reset();
  }

  monster.handleCollision(gemstone);
  monster.handleCollision(rock);

  monster.display();
  gemstone.display();
  rock.display();

  monster.displayScore();

  if (rock.isOffScreen()) {
    rock.reset();
  }

  rock.handleCollision(monster);
  gemstone.handleCollision(monster);

  ////***SET UP THE TIMER***////
  //Styling the font
  textStyle('Helvetica');
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('Time:'+timer,100,50);
  // While (timer > 0) {  // this doesn't work because it's all happening at the same time
  // }
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("TIME'S UP!", width/2, height/2);
  }
  ////***DONE WITH TIMER***////
}
function keyPressed() {
  //Press spacebar to start the game
  if (keyCode === 32) {
    state = 1;
  }
  //Press 'enter' key to play again
  if (keyCode === 13){
    state = 0;
  }
}
