//Exercise 7
//Prototype Project 3
//
//Huyen Tran Pham
//
//This is a proposal design for the final project in CART 253
//The final project will use this exercise features.
//I envisage project 3 to be a game with 3 levels
//Each level will have a different theme but the rule does not change much
//The game for me is interactive, creativve and it also shows many ideas in each level


let timer = 60

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  tex tSize(50);
  text(timer, width/2, height/2);

  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }

}
