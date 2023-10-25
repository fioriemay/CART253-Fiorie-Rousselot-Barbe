/**
 * Age of Aquariums Exercise
 * Fiorie Rousselot-Barbe
 * 
 */

"use strict";

//our user circle
let userCircle = {

    x: 600/3,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,


}

//our fish variables
let fish1;
let fish2;
let fish3;
let fish4;


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {

    //canvas size
    createCanvas(600, 600);

    //creating four fish with random x and y parameters
    // (see createFish function for details)
    fish1 = createFish(random(0, width), random(0, height));
    fish2 = createFish(random(0, width), random(0, height));
    fish3 = createFish(random(0, width), random(0, height));
    fish4 = createFish(random(0, width), random(0, height));
}


/**
 * Description of draw()
*/
function draw() {

    background(0);
    userSetup();
    displayUser();
    
    
}

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

function displayUser(){

    fill(255, 255, 255);
    ellipse(userCircle.x, userCircle.y, userCircle.size);
}

//creating a fish with x and y parameters
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
  