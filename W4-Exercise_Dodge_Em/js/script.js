
let img;

function preload(){

  img = loadImage ('https://raw.githubusercontent.com/fioriemay/CART253-Fiorie-Rousselot-Barbe/main/W4-Exercise_Dodge_Em/assets/images/cat.png');
}

function setup(){
image(img, 100, 100);

}

// /**
//  * Week 4 Exercise
//  * Fiorie Rousselot-Barbe
//  * 
//  * Here is my submission for the exercise, more info
//  * in the readme.md!
//  */

// "use strict";

// //secondary circle creation
// let covid19 = {

//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 5,
//   fill: {
//     r: 215,
//     g: 176,
//     b: 255,

//   },

//     oldX: 0,
//     oldY: 0,

// }


// let cats; 
// //player's circle
// let user = {

// x: 250,
// y: 250,
// size: 100,
// fill: 255,
// vx: 0,
// vy: 0,
// cat: 0

// }


// /**
//  * Description of preload
// */
// function preload() {
//   cats = loadImage('assets/images/cat.png');
// }


// /**
//  * Description of setup
// */
// function setup() {
//     createCanvas(500, 500);
//     //having the ennemy circle spawn at a random y height in our canvas
//     covid19.y = random(0, height);
//     covid19.vx = covid19.speed;

    

// }


// /**
//  * Description of draw()
// */
// function draw() {

//   //bg color is black
// //   background(0);

// //   // static background
// //   for (let i = 0; i < 275; i++){
// //     let x = random(0, width);
// //     let y = random (0, height);
// //     stroke(252, 187, 224);
// //     point (x,y);

// //   }

  

// //   //adding velocity to our ennemy circle
// //   covid19.x = covid19.x + covid19.vx;
// //   covid19.y = covid19.y + covid19.vy;

// //     //resets position of the ennemy circle when it moves out of frame
// //     if(covid19.x > width){

// //       covid19.x = 0;
// //       covid19.y = random(0, height);
// //     }

// //       //sets user circle coordinates to mouse position
// //     //user.x = mouseX;
// //     //user.y = mouseY;

// //     if (mouseX > user.x){

// //       user.vx = 2;

// //     }

// //     else if (mouseX < user.x){

// //       user.vx = -2;

// //     }
    
// //     if (mouseY> user.y){

// //       user.vy = 2;

// //     }

// //     else if (mouseY < user.y){

// //       user.vy = -2;

// //     }

// //     user.x = user.x + user.vx;
// //     user.y = user.y + user.vy;

// //     //compares user's distance to ennemy circle, if
// //     // they are too close to one another/touch, the simulation ends
// //     let d = dist(user.x, user.y, covid19.x, covid19.y);

// //     if (d < covid19.size/2 + user.size/2){

// //       noLoop();

// //     }

// //     // if user gets closer to ennemy circle, ennemy circle gets bigger
// //     if(dist(covid19.oldX, covid19.oldY, user.x, user.y) > dist(covid19.x, covid19.y, user.x, user.y)){

// //       covid19.size +=0.15;


// //     }

// //     else if (dist(covid19.oldX, covid19.oldY, user.x, user.y) < dist(covid19.x, covid19.y, user.x, user.y)){

// //       covid19.size -=0.15;
// //     }

// //       covid19.oldX = covid19.x;
// //       covid19.oldY = covid19.y;

// //     //remove stroke and draw circles
// // noStroke();
// //   fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
// //   ellipse(covid19.x, covid19.y, covid19.size);

//   //fill(user.fill);
//   image(cats, 100, 100);
//   //ellipse(user.x, user.y, user.size);

// }