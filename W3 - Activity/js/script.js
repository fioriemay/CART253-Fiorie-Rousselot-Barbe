/**
 * Activity week 3
 * Fiorie Rousselot-Barbe
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

// variables
let bg = {

r: 0,
g: 0,
b: 0

};

let circle1 = {
x: 0,
y: 250,
size: 100,
fill: 255,
alpha: 200


};

let circle2 = {
x: 500,
y: 250,
size: 75,
fill: 255,
alpha: 200

};

/**
 * Description of setup
*/
function setup() {
createCanvas(500, 500);
    noStroke();

}


/**
 * Description of draw()
*/
function draw() {
    background(bg.r, bg.g, bg.b);

    //background colors
  bg.r = bg.r +1;
    // left circle
    circle1.x = circle1.x + 1;
    circle1.x = constrain(circle1.x, 0, width/2);
    circle1.size = circle1.size + 0.75;
    circle1.size = constrain(circle1.size, 0, width);

  fill(circle1.fill, circle1.alpha);
  ellipse(circle1.x, circle1.y, circle1.size);

  // right circle
  circle2.x = circle2.x + -1;
  circle2.x = constrain(circle2.x, width/2, width);
  circle2.size = circle1.size * 0.75;


  fill(circle2.fill, circle2.alpha);
  ellipse(circle2.x, circle2.y, circle2.size);
}