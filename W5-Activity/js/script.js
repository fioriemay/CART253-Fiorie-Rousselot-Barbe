/**
 * Fiorie Rousselot-Barbe
 * Activity of week 5
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let circle1 = {

    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,


}

let circle2 = {

    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    

}

function setup() {

//project canvas
createCanvas(500, 500);

//circles have different x values
circle1.x = width/3;
circle2.x= 2*width/3;

//circle movement
circle1.vx = random(-circle1.speed, circle1.speed);
circle2.vx = random(-circle2.speed, circle2.speed);
}



function draw() {

    //black background
    background (0);

}