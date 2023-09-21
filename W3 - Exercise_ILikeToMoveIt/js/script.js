/**
 * I like to move it (Week3 Exercise)
 * Fiorie Rousselot-Barbe
 * 
 *  
 * 
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

//variables

//one value for each r,g,b value
let bg ={

r: 255,
g: 255,
b: 255,

};

//first and second circles
let circle1 = {

x: 250,
y: 250,
size:75,
fill: 5,
alpha: 500,
maxSize: 110,
minSize: 60,

};

let circle2 = {

    x: 250,
    y: 250,
    size:75,
    fill: 5,
    alpha: 500,
    
    };

//line across the x axis
let xline = {

x1:0,
y1:250,
x2:500,
y2:250,

};

//line across the y axis
let yline = {

x1:250,
y1:500,
x2:250,
y2:0,

};

/**
 * Description of setup
*/
function setup() {
createCanvas (500,500);


}


/**
 * Description of draw()
*/
function draw() {

background(bg.r, bg.g, bg.b);

//background goes from white to pink
// doing this by changing the g and b value because
// my final color has a r value of 255 already
bg.g = bg.g - 1;
bg.g = constrain(bg.g, 201, 255);
//get the color wanted by using constrain
bg.b = bg.b - 1;
bg.b = constrain(bg.b, 238, 255);

// first circle
//circle moves alongside the line on X
circle1.x = mouseX;
// the mouseX value can go from 0-500 (canvas width)
// so i am mapping it using each variable as to get
// circles that are a reasonable size
circle1.size = map(mouseX, 0, width, circle1.minSize, circle1.maxSize);

noStroke();
fill(circle1.fill, circle1.alpha);
ellipse(circle1.x, circle1.y, circle1.size);

//second circle
// see comment for circle1 explaining map
circle2.y = mouseY;
circle2.size = map(mouseY, 0, height, circle1.minSize, circle1.maxSize);

noStroke();
fill(circle2.fill, circle2.alpha);
ellipse(circle2.x, circle2.y, circle2.size);


//y-axis line
// creating the lines using stroke and strokeweight
stroke(6);
strokeWeight(3);
line (yline.x1, yline.y1, yline.x2, yline.y2);

// x-axis line
stroke(6);
strokeWeight(3);
line (xline.x1, xline.y1, xline.x2, xline.y2);


}