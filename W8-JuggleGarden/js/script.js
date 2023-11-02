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
  let fairy1;

 

function preload() {

}



function setup() {

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

     fairy1 = new Fairy();
      
}
}



function draw() {
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
}

function mousePressed(){
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