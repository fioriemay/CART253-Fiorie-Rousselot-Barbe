/**
 * Week Two Exercise
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

/*
color palette
green: 168, 219, 156
yellow: 252, 234, 177
blue: 194, 234, 242
purple: 199, 167, 242
pink: 255, 175, 168
/**
 * Description of setup
*/
function setup() {
    //canvas and background
    createCanvas(640, 480);
    background(168, 219, 156);
    noStroke();
    //pink body and eyes color
    fill(254, 188, 208);
    //body
    ellipse(320, 410, 320, 365);
    //eye bases, left and right respectively
    ellipse (190, 260, 120, 120);
    ellipse (450, 260, 120, 120);

    //eye white, left and right respectively
    fill(250, 250, 250);
    ellipse (190, 260, 95, 95);
    ellipse (450, 260, 95, 95);

    //eye iris, left and right respectively

    fill(22, 47, 51);
    ellipse (165, 260, 45, 45);
    ellipse (475, 260, 45, 45);

    //cheeks, left and right respectively
    fill(252, 199, 215);
    ellipse (205, 375, 75, 45);
    ellipse (435, 375, 75, 45);

    //nose
    fill(250, 207, 220);
    ellipse(320, 325, 65, 20);

    //smile
    //smile shape

    fill(22, 47, 51);
    ellipse(320, 390, 70, 35);
    // pink ellipse overlapping
    fill(254, 188, 208);
    ellipse(320, 385, 70, 35);

    

}


/**
 * Description of draw()
*/
function draw() {

}