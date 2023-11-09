/**
 * Pink Shooter Game (Title TBA)
 * by Fiorie Rousselot-Barbe
 * 
 * 
 * 
 */

"use strict";

//background color rgb values
let bg = {

    r:20,
    g:17,
    b:20,
}

//player variable
let player = {

    x:20,
    y:525,
    w:95,
    h:95,

}

//array of bullets to group them up more simply when they spawn
let bullets = [];


function preload() {

}



function setup() {
createCanvas(600,600);
for(let i = 0; i < 10;){


}

}



function draw() {
//setting the background color
background(bg.r, bg.g, bg.b);

//used this to locate coordinates easier
fill(255, 255, 255);
text(mouseX + ","+ mouseY, 20, 20);

//our player is a circle (for now)
fill(255,255,255);
ellipse(mouseX, player.y, player.w, player.h);

//for each bullet in the array "bullets"
for(let bullet of bullets){

    ellipse(bullet.x, bullet.y, 15);
    //moving the bullet upwards
    bullet.y -=6;
}
}

// ------- END OF DRAW FUNCTION --------


function mousePressed(){

    let bullet = {

        x:mouseX,
        y:525,
    
    }
bullets.push(bullet);
}