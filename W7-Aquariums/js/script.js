/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

//user controlled circle
let userCircle = {

  x: 600/3,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,


}

//our fish school array
let school = [];
let schoolSize = 4;

function setup() {
  createCanvas(600, 600);

  //creating fish using createfish function, for loop creates 4 (0,1,2,3)
  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0,width),random(0,height));
  }
}

// fish has x and y position parameters
// creating fish, description and return
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    r: random(0,255),
    g: random(0,255),
    b: random(0,255),
  };
  return fish;
}


// moving fish, displaying fish, black background
function draw() {
  background(0);

   //for loop counts from 0-3, aka it will create our 4 fishes (0,1,2,3)
   // and display them as well
   for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }

  userSetup();
  displayUser();
  
}


// deciding if fish changes direction, moving fish
function moveFish(fish) {
  // chooses whether to change direction or not
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // moving the fish by adding velocities and x/y coordinates
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}


// displaying the fish as ellipses
function displayFish(fish) {
  push();
  fill(fish.r, fish.g, fish.b);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

//setting velocities to random, 
//and checking mouse positions to have circle follow user
function userSetup(){

  userCircle.vx = random(-userCircle.speed, userCircle.speed);
  userCircle.vy = random(-userCircle.speed, userCircle.speed);

  if (mouseX > userCircle.x){

      userCircle.vx = 2;
  
    }
  
    else if (mouseX < userCircle.x){
  
      userCircle.vx = -2;
  
    }
    
    if (mouseY> userCircle.y){
  
      userCircle.vy = 2;
  
    }
  
    else if (mouseY < userCircle.y){
  
      userCircle.vy = -2;
  
    }
  
    userCircle.x = userCircle.x + userCircle.vx;
    userCircle.y = userCircle.y + userCircle.vy;

   
}

//displaying the user circle
function displayUser(){

  fill(255, 255, 255);
  ellipse(userCircle.x, userCircle.y, userCircle.size);
}