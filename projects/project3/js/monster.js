//Monster
//
//A class to define the monster's behavior.
//The monster will be controlled by the input keys to move it up, down, left and right.

//Monster constructor
//
//Sets the properties
function Monster(x,y,w,h,size,speed,score,scorePositionX,scorePositionY,upKey,downKey,leftKey,rightKey,monsterImage){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.speed = speed;
  this.score = score;
  this.scorePositionX = scorePositionX;
  this.scorePositionY = scorePositionY;
  this.upKey = upKey;
  this.downKey = downKey;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.monsterImage = monsterImage;
}

//handleInput()
//
// Check if the up,down,left,right keys are pressed and update velocity
Monster.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else if (keyIsDown(this.leftKey)) {
    this.vx = -this.speed;
  }
  else if (keyIsDown(this.rightKey)){
    this.vx = this.speed;
  }
  else {
    this.vx = 0;
    this.vy = 0;
  }
}

// update()
// Update x, y position based on velocity
// Constrain the resulting position to be within the canvas
Monster.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.x = constrain(this.x,0,width-this.w);
  this.y = constrain(this.y,0,height-this.h);
}
//isOffScreen()
//
//If the player is running out of the screen
Monster.prototype.isOffScreen = function(){
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}
// handleCollision(gemstone)
//
// Check if this monster overlaps the gemstone passed as an argument
// and if so plus one point and enlarge
Monster.prototype.handleCollision = function(gemstone) {
  // Check if the monster overlaps the gemstone on x axis
  if (this.x + this.size >gemstone.x && this.x < gemstone.x + gemstone.w) {
    // Check if the monster overlaps the gemstone on y axis
    if (this.y + this.size > gemstone.y && this.y < gemstone.y + gemstone.h) {
      // If so, expand the monster size
      this.size +=5;
      //Add point to the monster
      this.score +=1;
    }
  }
}
// handleCollision(rock)
//
// Check if this monster overlaps the gemstone passed as an argument
// and if so minus one and shrink the monster
Monster.prototype.handleCollision = function(rock) {
  // Check if the monster overlaps the rock on x axis
  if (this.x + this.size > rock.x && this.x < rock.x + rock.w) {
    // Check if the monster overlaps the rock on y axis
    if (this.y + this.size > rock.y && this.y < rock.y + rock.h) {
      // If so, shrink the monster size
      this.size -=5;
      //Minus point to the monster
      this.score -=1;
    }
  }
}

// display()
//
//Display the monster image
Monster.prototype.display = function() {
  noStroke();
  image(this.monsterImage,this.x,this.y,this.w,this.h);
}

//Display the score under the timer
Monster.prototype.displayScore = function() {
  text('Score: ' + this.score,this.scorePositionX,this.scorePositionY);
  textSize(20);
  fill(255);
}
