/**
 * Age of Aquariums
 * Fiorie Rousselot-Barbe
 * 
 * Avoid leaving the aquarium and touching the fish!
 */

"use strict";

let state = 'simulation';

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

    //displays mouseX and mouseY for debug purposes
  push();
  fill(255, 255, 255);
  text(mouseX + ","+ mouseY, 20, 20);
  pop();
  
  //checks the state of  the simulation

  if(state === 'simulation'){
    simulation();

  }

  else if(state === 'end1'){
    end1();

  }
  
  else if(state === 'end2'){
    end2();

  }
  
}


//////// STATE FUNCTIONS //////////////



function simulation(){

 //for loop counts from 0-3, aka it will create our 4 fishes (0,1,2,3)
   // and display them as well
   for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }

  userSetup();
  displayUser();

  checkFish();
  checkUser();

}

//ending if the user touches one of the fishes
function end1(){

  push();
  textSize(40);
  fill(240, 120, 208);
  textAlign(CENTER, CENTER);
  text('you squashed the fish!', width/2, height/2);
  pop();

}

function end2(){

  push();
  textSize(40);
  fill(212, 152, 235);
  textAlign(CENTER, CENTER);
  text('you left the aquarium...', width/2, height/2);
  pop();

}



////////////FISH FUNCTIONS///////////////



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

//if user touches fishes, end simulation
function checkFish(){

  for (let i = 0; i < school.length; i++) {
    
    // dist (x1,y1, x2, y2)
    let d=  dist(userCircle.x, userCircle.y, school[i].x, school[i].y);


    if(d < (school[i].size / 2) + (userCircle.size/2)){

      state = 'end1';

    }
  }



}
/////////////USER FUNCTIONS////////////////



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


//checks location of the user

function checkUser(){

  if(userCircle.x > 600 || userCircle.x < 0 || userCircle.y > 600 || userCircle.y < 0){

    state = 'end2';

  }

}