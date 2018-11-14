///NEW CODE PART 5: NEW CLASS FOOD THAT SPEEDS UP BALL///
//
// A class to define how a food ball behaves.
// Food Ball constructor
//
// Sets the properties with the provided arguments
function Food(x,y,size) {
  this.x = x;
  this.y = y;
  this.size = size;
}
// handleCollision(ball)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Food.prototype.handleCollision = function(ball) {
  // Check if the food ball overlaps the paddle on x axis
  if (this.x + this.size > ball.x && this.x < ball.x) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > ball.y && this.y < ball.y) {
      this.x = random(100,400);
      this.y = random(100,500);
      //Make the ball move faster
      ball.vx *= 2;
      return true;
    }
  }
  return false;
}
//display()
//
//Display the ball as an algae//
Food.prototype.display = function() {
  image(foodImage,this.x,this.y,this.size,this.size);
}
///END NEW CODE PART 5///
