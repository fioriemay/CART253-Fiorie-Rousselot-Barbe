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

let circle2 = {

    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    

}

let state = 'title'; // can be : title, simulation, love or sadness.

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

    

}

function title(){

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

   //debug used, displays circle coordinates
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

function move(){

    //circle1.x = circle1.x + circle1.vx;
    //circle1.y = circle1.y + circle1.vy;


    //circle1.x = mouseX
   // circle1.y = mouseY

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;

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