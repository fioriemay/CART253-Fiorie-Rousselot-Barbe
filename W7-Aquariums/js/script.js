/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/*
let fish1;
let fish2;
let fish3;
let fish4;*/

//our fish school array
let school = [];

function setup() {
  createCanvas(600, 600);

  //creating fish using createfish function
  school[0] = createFish(random(0, width), random(0, height));
  school[1] = createFish(random(0, width), random(0, height));
  school[2] = createFish(random(0, width), random(0, height));
  school[3] = createFish(random(0, width), random(0, height));
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
    speed: 2
  };
  return fish;
}


// moving fish, displaying fish, black background
function draw() {
  background(0);

   //for loop counts from 0-3, aka it will create our 4 fishes (0,1,2,3)
  for (let i = 0; i < 4; i++) {
    moveFish(school[i]);
  }

  // same logic to display them
  for (let i = 0; i < 4; i++) {
    displayFish(school[i]);
  }
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
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}