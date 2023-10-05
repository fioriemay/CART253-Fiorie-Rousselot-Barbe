/**
 * Fiorie Rousselot-Barbe
 * Activity of week 5
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */


//user circle
let circle1 = {

    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,


}

//second circle
let circle2 = {

    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    tx: 0,
    ty: 10,
    

}

//we start our simulation at the title screen
let state = 'title'; // can be : title, simulation, love or sadness.




function setup() {

//project canvas
createCanvas(500, 500);

//refers to setting up our circle dimensions
setupCircles();

}



function setupCircles(){

//circles have different x values
circle1.x = width/3;
circle2.x= 2*width/3;

//circle movement (original version)
circle1.vx = random(-circle1.speed, circle1.speed);
circle1.vy = random(-circle1.speed, circle1.speed);

circle2.vx = random(-circle2.speed, circle2.speed);
circle2.vy = random(-circle2.speed, circle2.speed);

}



function draw() {

    //black background
    background (0);
    
    //checking the state to see which function to go to.
    if(state === 'title'){

        title();

    }

    else if (state === 'simulation'){

        simulation();

    }

    else if (state === 'love'){

       love();

    }

    else if (state === 'sadness'){

        sadness();

    }

    else if(state === 'happyAlone'){

        happyAlone();
    }

    

}

function title(){

    //title consists of text
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('LOVE?', width/2, height/2);
    pop();

}

function simulation(){

    move();
   checkOffScreen();
   checkOverlap();
   display();

   //!!!debug used, displays circle coordinates if uncommented!!!!
   /* push();
   fill(255,100,100);
   pop();
   text(circle1.x, circle1.x, circle1.y);
   text(circle1.y, circle1.x, circle1.y +10);

   push();
   fill(255,100,100);
   pop();
   text(circle2.x, circle2.x, circle2.y);
   text(circle2.y, circle2.x, circle2.y +10);
*/
   pinkNoise();


}

function love(){

    push();
    textSize(64);
    fill(255, 150, 150);
    textAlign(CENTER, CENTER);
    text('LOVE!', width/2, height/2);
    pop();

}

function sadness(){

    push();
    textSize(64);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(':((', width/2, height/2);
    pop();

}

function happyAlone(){
   
    push();
    textSize(25);
    fill(255, 150, 200);
    textAlign(CENTER, CENTER);
    text('you didnt need them after all!', width/2, height/2);
    pop();

}

function move(){


/*
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;*/

        //using perlin noise to have the non-user circle move around
    circle2.tx = circle2.tx + 0.025;
    circle2.ty = circle2.ty + 0.025;
    
    let noiseX = noise(circle2.tx);
    let noiseY = noise(circle2.ty);

    circle2.vx = map(noiseX, 0,1, -circle2.speed, circle2.speed);
    circle2.vy = map(noiseY, 0, 1, -circle2.speed, circle2.speed);

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;

        // our user circle follows the mouse x and y position
    if (mouseX > circle1.x){
  
        circle1.vx = 2;
    
      }
    
      else if (mouseX < circle1.x){
    
        circle1.vx = -2;
    
      }
      
      if (mouseY> circle1.y){
    
        circle1.vy = 2;
    
      }
    
      else if (mouseY < circle1.y){
    
        circle1.vy = -2;
    
      }
    
      circle1.x = circle1.x + circle1.vx;
      circle1.y = circle1.y + circle1.vy;
}

function checkOffScreen(){

    if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height ||circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){

        state = 'sadness';
        let dFail = dist(circle1.x,circle1.y,circle2.x,circle2.y);
        console.log(dFail);

    }

}

function checkOverlap(){

    // check if circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2){

        state ='love';
        console.log(d);

    }

}

// interactive pink background using perlin noise, follows mouse position
function pinkNoise(){

    let noiseSize=0.015
    for(let i=0; i < width*4.5; i++){
    let noiseNum = noise((mouseX + i)*noiseSize, mouseY*noiseSize);

    stroke(250,122,199, 100);
    line(i, mouseY+noiseNum*200, i, height);

}

}

function display(){

    // display circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed(){

    if (state === 'title') {

        state = 'simulation';

    }

}

// if we press the key A, we display a new semi-hidden ending
function keyPressed(){

if(key === 'a'){

    state = 'happyAlone';
}

}