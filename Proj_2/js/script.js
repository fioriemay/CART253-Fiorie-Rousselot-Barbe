/**
 * LoveStruck
 * by Fiorie Rousselot-Barbe
 * CART253, Fall 2023
 * 
 * 
 */

"use strict";

//states: title, gameplay, end
// (we start at the title screen)
let state = 'title';


//background color rgb values (used before i set it to a gif)
let bg = {

    r:20,
    g:17,
    b:20,
}

//new background will be set to the gif i created
let newBg;



//player variable
let player = {

    x:20,
    y:525,
    w:95,
    h:95,
    pic: undefined,

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

let enemyImg;

let gunshot;

let bgSong;

//counter to avoid the music playing more than once
let soundCounter = 1;

//loading a font
let coutureFont;

let heartBullet;

let heartCursor;

let titlePage;

function preload() {

    //image loading
    newBg = loadImage('assets/images/pinkbg.gif');
    player.pic = loadImage('assets/images/heartbow1.png');
    enemyImg = loadImage('assets/images/enemy.png');
    heartBullet = loadImage('assets/images/heartbullet.png');
    heartCursor = loadImage('assets/images/newcursor.png');
    titlePage = loadImage('assets/images/titlescr.gif');
    
    

    //sound loading
    gunshot = loadSound('assets/sounds/pewpew.mp3');
    bgSong = loadSound('assets/sounds/nightshade.mp3')

    //font loading
    coutureFont = loadFont('assets/fonts/couture.otf');
}



function setup() {

//set up the audio and canvas
createCanvas(600,600);
userStartAudio();
//spawn enemies
for(let i = 0; i < 10; i++){

    enemy = {

        x:random(0, width),
        y:random(-190, -20),

    }
    enemies.push(enemy);
}

}
// ------- END OF SETUP ---------


function draw() {
    if(state === 'title'){

        title();

    }

    else if (state === 'simulation'){

        simulation();

    }
}

// ------- END OF DRAW FUNCTION --------

function simulation(){
//setting the background color
//background(bg.r, bg.g, bg.b);
background(newBg);


//custom-made cursor
cursor('assets/images/newcursor.png',10, 10);


rectMode(CENTER);

//used this to locate coordinates easier
//fill(255, 255, 255);
//text(mouseX + ","+ mouseY, 20, 20);


//displaying player as the image / bow
image(player.pic, mouseX-75, player.y);



//for each bullet in the array "bullets"
for(let bullet of bullets){

    fill(201, 95, 139);
    image(heartBullet, bullet.x, bullet.y, 20, 20);
    //moving the bullet upwards
    bullet.y -=6;
}

//draw enemies
for(let enemy of enemies){

        enemy.y +=2;
        fill(115, 29, 64);
        image(enemyImg, enemy.x, enemy.y, 25, 25);

}

//background rectangle to put under player score for better visibility
push();
fill (227, 73, 145);
noStroke();
rect(39, 25, 68, 35, 10);
pop();
//nested loop, checking enemies and bullets
for(let enemy of enemies){

    for(let bullet of bullets){
//enemy location +6 to avoid hitbox errors
        if(dist(enemy.x+6, enemy.y+6, bullet.x, bullet.y) < 10){
            //checks array, splices(gets rid of) one enemy and the bullet that was shot.
            enemies.splice(enemies.indexOf(enemy), 1);
            bullets.splice(bullets.indexOf(bullets), 1);

            //for now enemies only respawn if they were shot and did not go off screen, this will be fixed soon
            let respawnEnemy = {

                x:random(0, width),
                y:random(-190, -20),
        
            }
            enemies.push(respawnEnemy);

            //for each enemy that gets killed, we add 1 to the score!
            gameScore +=1;
        }

    }

    //text displaying the player's score
    push();
    fill(0);
    textStyle(BOLD);
    //used loaded font: Couture
    textFont(coutureFont);
    text('Score:'+gameScore, 13.5, 29);
    pop();
}


}

// ---- END OF SIMULATION FUNCTION -----
function title(){

    image(titlePage,0,0);
    
}
function mousePressed(){

    //creating bullets everytime the player clicks on the left mouse button
    //they are created at the same y level so they are shot upwards and at the mouse X
    let bullet = {

        x:mouseX,
        y:525,
    
    }
    //as a bullet gets created, we add it to our array of bullets from earlier
bullets.push(bullet);

//using this so my sound does not play overlapping every time the user presses the mouse button.
if(soundCounter === 1){

   bgSong.loop();
   bgSong.setVolume(0.25);
   soundCounter+=1;
}

if(state === 'title'){

    state = 'simulation';

}

if(state === 'simulation'){

    gunshot.play();
    

}
}