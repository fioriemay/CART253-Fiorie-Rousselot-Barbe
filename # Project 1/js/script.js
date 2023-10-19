/**
 * Project 1
 * Fiorie Rousselot-Barbe
 * 
 * Cat Dress-up Game
 */

"use strict";

/*
color palette:
brown body: 161, 124, 96
shadows: 135, 104, 80
*/

let catbody = {
    //these x and y coordinates are only for the bottom half of the cat's body
    x: 400,
    y: 550,
    //this color value will be used for the entire cat's body
    r: 161,
    g: 124,
    b: 96,
}

let cathead = {

    x: 400,
    y: 330,
    // the color is in catbody, we want the head and body to match
}

let state = 'title'; //this can be title screen or simulation

let collar = {
    //ap for appearance, undefined until preload where we locate the image
    ap: undefined,
    dragging: false,
    x: 476,
    y: -18,
    w: 310,
    h: 150,


}

let bow = {
    ap: undefined,
    dragging: false,
    x: 40,
    y: 9,
    w: 310,
    h: 150,

}

let pearls = {
    ap: undefined,
    dragging: false,
    x: 677,
    y: 153,
    w: 310,
    h: 150,

}

let bowSlider;
let bowVal;

let collarSlider;
let collarVal;

let pearlsSlider;
let pearlsVal;
l


//DISTANCES USED FOR DRAG / DROP
let dCollar = dist(mouseX, mouseY, collar.x, collar.y);
let dBow = dist(mouseX, mouseY, bow.x, bow.y);
let dPearls = dist(mouseX, mouseY, pearls.x, pearls.y);

function preload() {
    collar.ap = loadImage('assets/images/collar.png');
    bow.ap = loadImage('assets/images/bow.png');
    pearls.ap = loadImage('assets/images/pearls.png');
}



function setup() {

    //creating a canvas
    createCanvas(800, 600);

    //sliders
    bowSlider = createSlider(0, 255, 0, 20);
    bowSlider.position = (0,0);
    

    collarSlider = createSlider(0, 255, 0, 20);
    collarSlider.position = (0,0);

    pearlsSlider = createSlider(0, 255, 0, 20);
    collarSlider.position = (0,0);

}



function draw() {

    //black background
background(231, 220, 232);


if(state === 'title'){

    title();

}

else if (state === 'simulation'){

    simulation();

}
    
  
}

function simulation(){

    catImage();
    accessories();

}


function catImage(){


noStroke();

//main body
fill(catbody.r, catbody.g, catbody.b);
ellipse(catbody.x, catbody.y, 450, 370);

//head sphere
ellipse(cathead.x, cathead.y, 350, 275);

//used this to find the right coordinates when drawing the cat
fill(255, 255, 255);
text(mouseX + ","+ mouseY, 20, 20);

//ears
//note: triangle(x1, y1, x2, y2, x3, y3)

fill(catbody.r, catbody.g, catbody.b);

//rounded ears
stroke(161, 124, 96);
strokeWeight(8);
strokeJoin(ROUND);

//first ear
triangle(262, 263, 248, 180, 338, 211);
triangle(455, 216, 559, 187, 536, 281);

//nose area
fill(135, 104, 80);
ellipse(400, 340, 110, 90);


//black nose
noStroke();
fill(0);
ellipse(400, 330, 31, 20);

//eyes
ellipse(320, 290, 30, 30);
ellipse(480, 290, 30, 30);

//whiskers
// line(x1, y1, x2, y2)

stroke(0);
strokeWeight(3);
//left, top to bottom
line(336, 336, 278, 320 );
line(336, 352, 276, 347 );
line(335, 365, 275, 370 );

//right, top to bottom
line(461, 334, 519, 323 );
line(460, 352, 520, 343 );
line(456, 369, 514, 368 );


}

function accessories(){

    bowVal = bowSlider.value();
    collarVal = collarSlider.value();
    pearlsVal = pearlsSlider.value();

    //image (image var location, x, y, width, height)
    tint(200, 10, collarVal);
    image(collar.ap, collar.x, collar.y, collar.w, collar.h);
    if (collar.dragging) {
        
        collar.x = mouseX 
        collar.y = mouseY 
      }
      noTint();

      tint(200, 10, bowVal);
      image(bow.ap, bow.x, bow.y, bow.w, bow.h);

      if (bow.dragging) {
        
       
        bow.x = mouseX 
        bow.y = mouseY 
      }
      noTint();

      tint(200, 10, pearlsVal);
      image(pearls.ap, pearls.x, pearls.y, pearls.w, pearls.h);

      if (pearls.dragging) {
        
       
        pearls.x = mouseX 
        pearls.y = mouseY 
      }
      noTint();

      

}

function title(){

push();

textSize(64);
fill(43, 6, 34);
textAlign(CENTER, CENTER);
text('Fiorie\'s cat dress-up game!', width/2, height/2);

textSize(45);
textStyle(ITALIC);
text('press p to play!', 400, 400);

pop();


}

function keyPressed(){

    if(key === 'p' && state === 'title'){
    
        state = 'simulation';
    }
    
    }

    function mousePressed(){

    if(state = 'simulation'){
        
        if (mouseX > collar.x && mouseX < collar.x + collar.w && mouseY > collar.y && mouseY < collar.y + collar.h) {
            collar.dragging = true;
            bow.dragging = false;
            pearls.dragging = false;
        
          }

        if (mouseX > bow.x && mouseX < bow.x + bow.w && mouseY > bow.y && mouseY < bow.y + bow.h) {
         bow.dragging = true;
         collar.dragging = false;
         pearls.dragging = false;
        
        }

        if (mouseX > pearls.x && mouseX < pearls.x + pearls.w && mouseY > pearls.y && mouseY < pearls.y + pearls.h) {
            pearls.dragging = true;
            collar.dragging = false;
            bow.dragging = false;
           
           }


    }

    else if (state = 'title'){

        
    }
    
    }

    function mouseReleased() {
        // Quit dragging
        collar.dragging = false;
        bow.dragging = false;
        pearls.dragging = false;
      }