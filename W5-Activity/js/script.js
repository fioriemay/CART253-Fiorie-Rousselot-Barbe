/**
 * Fiorie Rousselot-Barbe
 * Activity of week 5
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

// CONTINUE AT 27:00 !!!!!!!!!!!!!!!!!!!!!!!!!!
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
setupCircles();

}

function setupCircles(){

//circles have different x values
circle1.x = width/3;
circle2.x= 2*width/3;

//circle movement
circle1.vx = random(-circle1.speed, circle1.speed);
circle1.vy = random(-circle1.speed, circle1.speed);

circle2.vx = random(-circle2.speed, circle2.speed);
circle2.vy = random(-circle2.speed, circle2.speed);

}



function draw() {

    //black background
    background (0);
    
    simulation();

}

function simulation(){

    move();
   checkOffScreen();
   checkOverlap();
   display();
}

function move(){

    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen(){

    if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height ||circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){

        // sad ending

    }

}

function checkOverlap(){

    // check if circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2 + circle2.size/2){

        // love ending

    }

}

function display(){

    // display circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle1.y, circle2.size);
}