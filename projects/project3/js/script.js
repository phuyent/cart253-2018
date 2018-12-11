
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
var gemstone =[
  green,
  red,
  blue,
  white,
  yellow,
  pink
];
//Start rock with an empty array to later define its position
var rock =[];
//Three backgrounds for 3 levels
var backgroundImage = [
  level1,
  level2,
  level3
];
//A specific opening song that pairs ell with my eating theme
var openMusic;

// preload()
//
// Load the images and music before the program runs
function preload() {
//The opening song
 openMusic = new Audio('assets/sounds/nom-nom-song.mp3');
}


// setup()
//
//Create the monster and objects for each level
function setup() {
  createCanvas(800,600);

}


// draw()
//
//Handles input, updates all the elements, checks for collisions
//and displays everything.

function draw() {
  background(220,0,220);
  switch(state) {
    case 0:
    gameTitle();
    break;

    case 1:
    level1();
    break;

    case 2:
    level2();
    break;

    case 3:
    level3();
    break;

    case 4:
    gameEnd();
    break;
  }
}
function gameTitle(){
  openMusic.play();
  fill(255);
  text('THE GEM EATER', width/2, height/2);
  text('Press spacebar to start eating!!!',width/2, height*0.7)
  textFont('Georgia',30);
  textStyle(BOLD);
  textAlign(CENTER);
}
function level1() {
  ////***Level 1 theme will be on land, searching for the green and red gemstones***////
  //New background to pair with the theme
  backgroundImage[level1] = image()
  //Display the goal at the top right of the canvas
  text ('Eat 5 gemstone to pass',600,50);

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
    text("GAME OVER", width/2, height*0.7);
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
