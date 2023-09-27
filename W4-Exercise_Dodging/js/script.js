/**
 * Week 4 Exercise
 * Fiorie Rousselot-Barbe
 * 
 * Here is my submission for the exercise, more info
 * in the readme.md!
 */

"use strict";

let covid19 = {

  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0,

  }

}


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height);
    covid19.vx = covid19.speed;

}


/**
 * Description of draw()
*/
function draw() {
  background(0);

  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);

  ellipse(covid19.x, covid19.y, covid19.size);

  //CONTINUE AT 15:40
}