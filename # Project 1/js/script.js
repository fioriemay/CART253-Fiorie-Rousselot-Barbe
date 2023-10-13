/**
 * Project 1
 * Fiorie Rousselot-Barbe
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/*
color palette:
brown body: 161, 124, 96
shadows: 135, 104, 80
*/

let catbody = {
    //these x and y coordinates are only for the bottom half of the cat's body
    x:400,
    y:550,
    //this color value will be used for the entire cat's body
    r:161,
    g:124,
    b:96,
}

let cathead = {

    x:400,
    y:330,
    // the color is in catbody, we want the head and body to match
}

let state = 'simulation'; //this can be title screen or simulation

let collar = {
    //ap for appearance, undefined until preload where we locate the image
    ap:undefined,
    dragging:false,
    x:476,
    y:51,


}

function preload() {
    collar.ap = loadImage('assets/images/collar.png');
}



function setup() {

    //creating a canvas
    createCanvas(800, 600);

}



function draw() {

    //black background
background(0);


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

    //image (image var location, x, y, width, height)
    image(collar.ap, collar.x, collar.y);
}

function title(){

push();
textSize(64);
fill(200, 100, 100);
textAlign(CENTER, CENTER);
text('Fiorie\'s cat game!', width/2, height/2);
pop();


}

function keyPressed(){

    if(key === 'p' && state === 'title'){
    
        state = 'simulation';
    }
    
    }

    function mousePressed(){

    if(state = 'simulation'){



    }
    
    }