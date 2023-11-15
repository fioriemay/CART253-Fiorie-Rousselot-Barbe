/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// array for balls
let balls = [];

//array for cubes

let cubes = [];

// f minor
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

let bgColor = {

r:0,
g:0,
b:0,

}


function preload() {

}


//setting up canvas & audio
function setup() {
    createCanvas(600,600);

    userStartAudio();
}



function draw() {
    //background set to the variables declared higher up
    background(bgColor.r, bgColor.g, bgColor.b);

    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];
      ball.move();
      ball.bounce();
      ball.display();
    }

    for (let i = 0; i < cubes.length; i++) {
        let cube = cubes[i];
        cube.move();
        cube.bounce();
        cube.display();
      }
}

function mousePressed() {

    createBall(mouseX,mouseY);

    //we call the background color change whenever a new ball spawns
    bgChange();
  }
  
  function createBall(x,y) {
    let note = random(notes);
    let ball = new Ball(x,y,note);
    balls.push(ball);

  }

  function keyPressed(){

    if(key === 'c'){

        createCube(mouseX,mouseY);

    }
  }

  function createCube(x,y){

    let note = random(notes);
    let cube = new Cube(x,y,note);
    cubes.push(cube);

  }

  //function that changes the color of the background
  function bgChange(){

    bgColor.r = random(0,255);
    bgColor.g = random(0,255);
    bgColor.b = random(0,255);

  }