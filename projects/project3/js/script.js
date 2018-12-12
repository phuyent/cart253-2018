
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
var gemstones = [];
//Start rock with an empty array to later define its position
var rocks =[];
//Three backgrounds for 3 levels and the title background
var background0;
var background1;
var background2;
var bachground3;
var background4;
//A specific opening song that pairs ell with my eating theme
var openMusic;

// preload()
//
// Load the images and music before the program runs
function preload() {
  //The opening song
  openMusic = new Audio('assets/sounds/nom-nom-song.mp3');
  //The background of the beginning & the levels
  background0 = loadImage('assets/images/bg0.jpg');
  background1 = loadImage('assets/images/bg1.jpg');
  background2 = loadImage('assets/images/bg2.jpg');
  background3 = loadImage('assets/images/bg3.jpg');
  background4 = loadImage('assets/images/bg4.jpg');
  monsterImage = loadImage('assets/images/monster.png');
}


// setup()
//
//Create the monster and objects for each level
function setup() {
  createCanvas(800,600);
  //Create the gemstone
  //Set the information for gemstone.js
  for (var i=0; i<20; i++) {
    gemstones.push(new Gemstone());
  }
  //Create the rock
  //Set the information for rock.js
  for (var i=0; i<20; i++) {
    rocks.push(new Rock());
  }

  //Create the monster
  //Controlled by 4 arrows on the keyboard
  //Keycodes are written in the order up key, down key, left key and right key
  monster = new Monster(width/2,height-100,80,70,70,10,0,0,0,100,90,38,40,37,39,monsterImage);
}


// draw()
//
//Handles input, updates all the elements, checks for collisions
//and displays everything.

function draw() {
  //Rocks loop
  for(i=0; i<20;i++){
    rocks[i].update();
    rocks[i].display();
  }
  //Gemstones loop
  for(i=0; i<20;i++){
    gemstones[i].update();
    gemstones[i].displayLevelOne();
    gemstones[i].displayLevelTwo();
    gemstones[i].displayLevelThree();
  }
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
  //if()
  //
  //Conditions to switch states
  if (monster.scoreLevelOne ===5 && state === 1){
    text('Level Up!',width/2,height/2);
    state = 2;
  }
  if (monster.scoreLevelTwo ===10 && state === 2){
    text('Level Up!',width/2,height/2);
    state = 3;
  }
  if (monster.scoreLevelTwo ===15 && state === 3){
    text('LEVELS COMPLETED',width/2,height/2);
    state = 4;
  }

}
function gameTitle(){
  noStroke();
  imageMode(CORNER);
  image(background0,0,0,windowWidth,windowHeight);
  fill(255);
  textSize(40);
  text('THE GEM EATER',width/2, height/3);
  image(monsterImage,350,220,100,100);
  text('Join in to be the master of power',width/2, height*0.6);
  text('Press spacebar to start eating!!!',width/2, height*0.7);
  textFont('Times New Roman',30);
  textStyle(BOLD);
  textAlign(CENTER);
}
function levelOne() {
  ////***Level 1 theme will be on land, searching for the green gemstones***////
  //New background to pair with the theme
  push();
  imageMode(CORNERS);
  image(background1,0,0,windowWidth,windowHeight);
  //Display the goal at the top right of the canvas
  text ('Eat 5 gemstone to pass',600,50);
  pop();

  //if()
  //
  //Conditions to switch states
  if (monster.scoreLevelOne ===5 && state === 1){
    text('Level Up!',width/2,height/2);
    state = 2;
  }
  ////Handles input, updates all the elements, checks for collisions
  //and displays everything.

  //Monster functions
  monster.handleInput();
  monster.display();
  monster.update();
  monster.displayScoreLevelOne();
  monster.handleCollision(rocks);
  monster.handleCollision(gemstones);
  if (monster.isOffScreen()) {
    monster.reset();
  }

  //Rock functions
  for(i=0; i<10;i++){
    rocks[i].update();
    rocks[i].display();

  }
  //Gemstone functions
  for(i=0; i<10;i++){
    gemstones[i].update();
    gemstones[i].displayLevelOne();
  }

  ////***SET UP THE TIMER***////
  //Source: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  //Styling the font
  textStyle('Helvetica');
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('Time:'+timer,100,50);
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    //If the frameCount is divisible by 60, then a second has passed.
    //It will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("TIME'S UP!", width/2, height/3);
    text("Press 'Enter' to start again", width/2,height/5);
  }
  ////***DONE WITH TIMER***////
}
function levelTwo() {
  ////***Level 2 theme will be underwater, searching for the blue gemstones***////
  //New background to pair with the theme
  push();
  imageMode(CORNERS);
  image(background1,0,0,windowWidth,windowHeight);
  //Display the goal at the top right of the canvas
  text ('Eat 10 gemstone to pass',600,50);
  pop();
  if (monster.scoreLevelTwo ===10 && state === 2){
    text('Level Up!',width/2,height/2);
    state = 3;
  ////Handles input, updates all the elements, checks for collisions
  //and displays everything.

  //Monster functions
  monster.handleInput();
  monster.display();
  monster.update();
  monster.displayScoreLevelTwo();
  monster.handleCollision(rocks);
  monster.handleCollision(gemstones);
  if (monster.isOffScreen()) {
    monster.reset();
  }

  //Rock functions
  for(i=0; i<10;i++){
    rocks[i].update();
    rocks[i].display();

  }
  //Gemstone functions
  for(i=0; i<10;i++){
    gemstones[i].update();
    gemstones[i].displayLevelTwo();
  }

  ////***SET UP THE TIMER***////
  //Source: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  //Styling the font
  textStyle('Helvetica');
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('Time:'+timer,100,50);
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    //If the frameCount is divisible by 60, then a second has passed.
    //It will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("TIME'S UP!", width/2, height/3);
    text("Press 'Enter' to start again", width/2,height/5);
  }
  ////***DONE WITH TIMER***////
}
function levelThree() {
  ////***Level 3 theme will be in space, searching for the yellow gemstones***////
  //New background to pair with the theme
  push();
  imageMode(CORNERS);
  image(background3,0,0,windowWidth,windowHeight);
  //Display the goal at the top right of the canvas
  text ('Eat 15 gemstone to pass',600,50);
  pop();

  ////Handles input, updates all the elements, checks for collisions
  //and displays everything.

  //Monster functions
  monster.handleInput();
  monster.display();
  monster.update();
  monster.displayScoreLevelThree();
  monster.handleCollision(rocks);
  monster.handleCollision(gemstones);
  if (monster.isOffScreen()) {
    monster.reset();
  }

  //Rock functions
  for(i=0; i<10;i++){
    rocks[i].update();
    rocks[i].display();

  }
  //Gemstone functions
  for(i=0; i<10;i++){
    gemstones[i].update();
    gemstones[i].displayLevelThree();
  }

  ////***SET UP THE TIMER***////
  //Source: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  //Styling the font
  textStyle('Helvetica');
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('Time:'+timer,100,50);
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    //If the frameCount is divisible by 60, then a second has passed.
    //It will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("TIME'S UP!", width/2, height/3);
    text("Press 'Enter' to start again", width/2,height/5);
  }
  ////***DONE WITH TIMER***////
}
function gameEnd(){
  imageMode(CORNER);
  image(background4,0,0,windowWidth,windowHeight);
  text('GAME OVER', width/2, height/2);
  text('Press R to restart game',width/2,height*0.4);
  textFont('Times New Roman',30);
  textStyle(BOLD);
  textAlign(CENTER);
}
//keyPressed()
//
//Control the game with keyboards
function keyPressed() {
  //Press spacebar to start the game
  if (keyCode === 32) {
    state = 1;
  }
  //Press 'enter' to play again from the beginning if the player is at the final state
  if (keyCode === 13 && state === 4) {
    state = 0;
  }
}
