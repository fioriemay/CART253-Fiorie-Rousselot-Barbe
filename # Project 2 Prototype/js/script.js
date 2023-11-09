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

//enemy variable, we'll add more details to this further down the line
let enemy;

//array of bullets to group them up more simply when they spawn
let bullets = [];

//array of enemies
let enemies = [];

function preload() {

}



function setup() {
createCanvas(600,600);
for(let i = 0; i < 10; i++){

    enemy = {

        x:random(0, width),
        y:random(-300, height),

    }
    enemies.push(enemy);
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

for(let enemy of enemies){

        enemy.y +=2;
        rect(enemy.x, enemy.y, 15);

}

//nested loop, checking enemies and bullets
for(let enemy of enemies){

    for(let bullet of bullets){

        if(dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10){
            //checks array, splices(gets rid of) one enemy
            enemies.splice(enemies.indexOf(enemy), 1);

        }

    }
}
}

// ------- END OF DRAW FUNCTION --------


function mousePressed(){

    //creating bullets everytime the player clicks on the left mouse button
    let bullet = {

        x:mouseX,
        y:525,
    
    }
    //as a bullet gets created, we add it to our array of bullets
bullets.push(bullet);
}