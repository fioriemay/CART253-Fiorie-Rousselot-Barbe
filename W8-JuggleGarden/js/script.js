/**
 * JuggleGarden
 * Fiorie Rousselot-Barbe
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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

function preload() {

}



function setup() {

    createCanvas(600, 600);

    // using a for loop to create our flowers
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
}



function draw() {
 //grass or bg color
 background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

 // iterate through our array of flowers, then display them
 for (let i = 0; i < garden.flowers.length; i++) {
   let flower = garden.flowers[i];
   flower.display();
 }
}

function mousePressed(){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }

    let flower = new Flower(x, y, size, stemLength, petalColor);
      //add flower to array
      garden.flowers.push(flower);
    
}