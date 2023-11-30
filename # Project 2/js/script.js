/**
 * LoveStruck
 * by Fiorie Rousselot-Barbe
 * CART253, Fall 2023
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

// the player's score is kept track of
// it starts at zero
let gameScore = 0;

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

//spawn enemies
for(let i = 0; i < 10; i++){

    enemy = {

        x:random(0, width),
        y:random(-90, 30),

    }
    enemies.push(enemy);
}

}



function draw() {
//setting the background color
background(bg.r, bg.g, bg.b);
rectMode(CENTER);

//used this to locate coordinates easier
fill(255, 255, 255);
text(mouseX + ","+ mouseY, 20, 20);

//our player is a circle (for now)
fill(166,30,86);
ellipse(mouseX, player.y, player.w, player.h);

//for each bullet in the array "bullets"
for(let bullet of bullets){

    fill(201, 95, 139);
    ellipse(bullet.x, bullet.y, 15);
    //moving the bullet upwards
    bullet.y -=6;
}

//draw enemies
for(let enemy of enemies){

        enemy.y +=2;
        fill(115, 29, 64);
        rect(enemy.x, enemy.y, 15);

}

//nested loop, checking enemies and bullets
for(let enemy of enemies){

    for(let bullet of bullets){

        if(dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10){
            //checks array, splices(gets rid of) one enemy and the bullet that was shot.
            enemies.splice(enemies.indexOf(enemy), 1);
            bullets.splice(bullets.indexOf(bullets), 1);

            //for now enemies only respawn if they were shot and did not go off screen, this will be fixed soon
            let respawnEnemy = {

                x:random(0, width),
                y:random(-90, 30),
        
            }
            enemies.push(respawnEnemy);

            //for each enemy that gets killed, we add 1 to the score!
            gameScore +=1;
        }

    }

    text(gameScore, 25, 25);
}
}

// ------- END OF DRAW FUNCTION --------


function mousePressed(){

    //creating bullets everytime the player clicks on the left mouse button
    //they are created at the same y level so they are shot upwards and at the mouse X
    let bullet = {

        x:mouseX,
        y:525,
    
    }
    //as a bullet gets created, we add it to our array of bullets from earlier
bullets.push(bullet);
}