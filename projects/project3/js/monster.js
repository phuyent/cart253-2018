//Monster
//
//A class to define the monster's behavior.
//The monster will be controlled by the input keys to move it up, down, left and right.

//Monster constructor
//
//Sets the properties
function Monster(x,y,w,h,size,speed,scoreLevelOne,scoreLevelTwo,scoreLevelThree,scorePositionX,scorePositionY,
  upKey,downKey,leftKey,rightKey,monsterImage){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = 0;
    this.vy = 0;
    this.size = size;
    this.speed = speed;
    //Three level, three score count start from 0
    this.scoreLevelOne = scoreLevelOne;
    this.scoreLevelTwo = scoreLevelTwo;
    this.scoreLevelThree = scoreLevelThree;
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
  //handleCollision()
  //
  //See if the monster overlaps gemstone/rock array
  //Give points & size appropriately
  Monster.prototype.handleCollision = function(rocks) {
    // Check if the monster overlaps the rock on x axis
    if (this.x + this.size > rocks.x && this.x < rocks.x + rocks.w) {
      // Check if the monster overlaps the rock on y axis
      if (this.y + this.size > rocks.y && this.y < rocks.y + rocks.h) {
        // If so, shrink the monster size
        this.size -=2;
        //Minus point to the monster
        this.scoreLevelOne -=1;
        this.scoreLevelTwo -=2;
        this.scoreLevelThree -=3;
      }
    }
  }
  Monster.prototype.handleCollision = function(gemstones) {
    // Check if the monster overlaps the rock on x axis
    if (this.x + this.size > gemstones.x && this.x < gemstones.x + gemstones.w) {
      // Check if the monster overlaps the rock on y axis
      if (this.y + this.size > gemstones.y && this.y < gemstones.y + gemstones.h) {
        // If so, enlarge the monster size
        this.size +=5;
        //Add point to the monster
        this.scoreLevelOne +=1;
        this.scoreLevelTwo +=2;
        this.scoreLevelThree +=3;
      }
    }
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
  // display()
  //
  //Display the monster image
  Monster.prototype.display = function() {
    noStroke();
    image(this.monsterImage,this.x,this.y,this.w,this.h);
  }

  //Display the score under the timer
  Monster.prototype.displayScoreLevelOne = function() {
    text('Score: ' + this.scoreLevelOne,this.scorePositionX,this.scorePositionY);
    textSize(20);
    fill(255);
  }
  Monster.prototype.displayScoreLevelTwo = function() {
    text('Score: ' + this.scoreLevelTwo,this.scorePositionX,this.scorePositionY);
    textSize(20);
    fill(255);
  }
  Monster.prototype.displayScoreLevelThree = function() {
    text('Score: ' + this.scoreLevelThree,this.scorePositionX,this.scorePositionY);
    textSize(20);
    fill(255);
  }
