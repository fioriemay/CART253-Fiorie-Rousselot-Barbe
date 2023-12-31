/**
 * Fiorie's fairy garden
 * by Fiorie Rousselot-Barbe
 * 
 * user control element: planting flowers
 */

"use strict";

let garden = {
    // array of flowers (garden.flowers)
    flowers: [],
    
    //amount of flowers we will let exist
    numFlowers: 0,

    // background color of the canvas / grass
    grassColor: {
      r: 120,
      g: 180,
      b: 120
    }

    
  };
  
  //current state
  let state = 'simulation';
  //my fairy object
  let fairy1;

 

function preload() {

}



function setup() {

  //creating my canvas
    createCanvas(600, 600);

    // using a for loop to create our flowers
    // leaving all this for now but we're creating flowers using mousePressed instead
    // no flowers should spawn when the simulation is launched because we set garden.numFLowers to zero
    for (let i = 0; i < garden.numFlowers; i++) {
      
        //variables regarding the parameters
      let x = random(0, width);
      let y = random(0, height);
      let size = random(50, 80);
      let stemLength = random(50, 100);
      let petalColor = {
        r: random(100, 255),
        g: random(100, 255),
        b: random(100, 255)
      }

      // create flower
      let flower = new Flower(x, y, size, stemLength, petalColor);
      //add flower to array
      garden.flowers.push(flower);

     
      
}

//setting variable to an object
fairy1 = new Fairy();
}



function draw() {

  if(state === 'simulation'){
 //grass or bg color
 background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

 // iterate through our array of flowers, then display them
 for (let i = 0; i < garden.flowers.length; i++) {
   let flower = garden.flowers[i];
   flower.display();
 }

 //creating the fairy

 fairy1.move();
 fairy1.display();

 //if there are too many flowers, the state changes to end the game
 if(garden.flowers.length>18){

  state = 'end1';

 }

 //if the fairy escapes the garden, end the game 
 else if(fairy1.x > 605 || fairy1.x < 0 || fairy1.y > 605 || fairy1.y < 0){

  state = 'end2';

 }
 
}
//--END OF IF STATE SIMULATION -- //

if(state === 'end1'){

  push();
    textSize(25);
    fill(255, 150, 200);
    textAlign(CENTER, CENTER);
    text('the fairy got lost amongst the flowers!', width/2, height/2);
    pop();

}
//END OF END1 IF//

if(state === 'end2'){
  push();
  textSize(25);
  fill(255, 150, 200);
  textAlign(CENTER, CENTER);
  text('the fairy ran away!', width/2, height/2);
  pop();

}
}
//--END OF DRAW FUNCTION (note so i dont mix up my brackets)--//

function mousePressed(){
  //flower parameters for when mousePressed spawns one
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);

    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    }

    let flower = new Flower(x, y, size, stemLength, petalColor);
      //add flower to array
      garden.flowers.push(flower);
  }
      
    
