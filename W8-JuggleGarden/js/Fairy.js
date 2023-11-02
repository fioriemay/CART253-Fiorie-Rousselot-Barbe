class Fairy{

constructor() {

//color schemes
   this.bodyColor = {

    r:242,
    g:116,
    b:162,

    };

    this.wingColor = {

    r:245,
    g:243,
    b:188,

    };

// coordinates and sizes
    this.x = 110;
    this.y = 110;
    this.width = 100;
    this.height = 100;

    this.vx = 0;
    this.vy = 10;
    this.xx = 0;
    this.yy = 0;
    this.speed = 3;


}

move(){

    //moving the fairy using perlin noise
    this.vx = this.vx + 0.025;
    this.vy = this.vy + 0.025;
    
    let noiseX = noise(this.vx);
    let noiseY = noise(this.vy);

    this.xx = map(noiseX, 0, 1, -this.speed, this.speed);
    this.yy = map(noiseY, 0, 1, -this.speed, this.speed);
    this.x = constrain((this.x + this.xx), 0, 600);
    this.y = constrain((this.y + this.yy), 0, 600);
    
    

}

display(){

    push();
    noStroke();
    fill(this.bodyColor.r, this.bodyColor.g, this.bodyColor.b);
    ellipse(this.x, this.y, this.width, this.height);
    pop();
}

}