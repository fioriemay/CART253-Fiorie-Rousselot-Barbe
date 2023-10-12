/**
 * Project 1
 * Fiorie Rousselot-Barbe
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/*
color palette:
brown body: 161, 124, 96
*/

let catbody = {
    //these x and y coordinates are only for the bottom half of the cat's body
    x:400,
    y:550,
    //this color value will be used for the entire cat's body
    r:161,
    g:124,
    b:96,
}

let cathead = {

    x:400,
    y:330,
    // the color is in catbody, we want the head and body to match
}

function preload() {

}



function setup() {

    //creating a canvas
    createCanvas(800, 600);

}



function draw() {

    //black background
    background(0);
    noStroke();

    //main body
    fill(catbody.r, catbody.g, catbody.b);
    ellipse(catbody.x, catbody.y, 450, 370);
    
    //head sphere
    ellipse(cathead.x, cathead.y, 350, 275);
}