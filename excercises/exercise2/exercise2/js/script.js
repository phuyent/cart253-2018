/*********************************************************

Exercise 2 - The Artful Dodger
Pippin Barr

Starter code for exercise 2.

*********************************************************/

// The position and size of our avatar RECTANGLE
var avatarX;
var avatarY;
var avatarSize = 50;

// The speed and velocity of our avatar RECTANGLE
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

//How much bigger and faster the avatar gets with each successful dodges
var avatarSizeIncrease ;
var avatarSpeedIncrease ;

// The position and size of the enemy AKA THE BOMB
var enemy
var enemyX;
var enemyY;
var enemySize = 50;
// How much bigger the enemy  gets with each successful dodge
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;

//The text counting the dodges the player has made
var string = "Successful Dodges:";

//preload()
//
//Preload the bomb image before the program starts
function preload() {
  enemy = loadImage('assets/images/bomb.png');
}
// setup()
//
// Make the canvas, position the avatar and enemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  //The appearance of the text
  fill(255);
  textSize(24);
  textAlign(RIGHT,BOTTOM);
  textFont(string);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  //The amount the size and the speed of the player
  avatarSizeIncrease = random(1,100);
  avatarSpeedIncrease = random(1,5);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  //Change background to blue
  background(0,220,255);

  //The official text
  text(string,500,500);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the player's successful dodges
    string = string + "0" ;
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySize = 50;
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    string = string + "0";
    enemyX = 0;
    enemyY = random(0,height);
    enemySize = 50;
    enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
    if (enemyX > width) {
      // This means the player dodged so update its dodge statistic
      dodges = dodges + 1;
      // Tell them how many dodges they have made
      console.log(dodges + " DODGES!");
      // Tell them how many dodges they have made ON SCREEN
      string = string + dodges;
      //Change the size and speed of the player after each successful dodge
      avatarSize = avatarSize + avatarSizeIncrease;
      avatarSpeed = avatarSpeed + avatarSpeedIncrease;
      // Reset the enemy's position to the left at a random height
      enemyX = 0;
      enemyY = random(0,height);
      // Increase the enemy's speed and size to make the game harder
      enemySpeed = enemySpeed + enemySpeedIncrease;
      enemySize = enemySize + enemySizeIncrease;
    }




  // Display the current number of successful in the console
  console.log(dodges);

  // The player is white
  fill(255);
  // Draw the player as a RECTANGLE
  rect(avatarX,avatarY,40,40);

  // Display the enemy image
  image(enemy,enemyX,enemyY,60,60);


}
