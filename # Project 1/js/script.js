/**
 * Snake Reinvented
 * Fiorie Rousselot-Barbe
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

//size of the grid in my snake
let gridSize;

//space between the snake squares
let space;

//background color
let bg = {

    r:201,
    g:181,
    b:255,

}

function preload() {

}



function setup() {
    //size of our canvas
    createCanvas(1000, 1000);

    //making sure the first two parameters are the x/y coordinates and the other two are width & height
    rectMode(CENTER);

    //amount of squares we can fit in the grid
    // e.g. if gridSize is set to 5 then the canvas is a 5x5 grid
    gridSize = 20;
    space = width / gridSize;

}



function draw() {

    //background depending on the variables in "bg", allowing us to change colors later if needed
    background(bg.r, bg.g, bg.b);

    noFill();
    stroke(10, 20, 30);
    strokeWeight(space);

    //rect (x,y, width, height)
    rect(width/2, height/2, width, height );
}