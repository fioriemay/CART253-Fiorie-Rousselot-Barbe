class Cube {

    constructor(x,y,note) {
      this.x = x;
      this.y = y;
      this.size = 50;

      //cube random color
      this.fill = {
        r: random(200,255),
        g: random(200,255),
        b: random(200,255),
      };

      
      this.speed = 7
      this.vx = random(-this.speed,this.speed);
      this.vy = random(-this.speed,this.speed);

      this.bell = loadSound('assets/sounds/bell.wav');
  
      
    }
  
    move() {
        //adding velocity to position to move
      this.x += this.vx;
      this.y += this.vy;
  
    }
  
    bounce() {
      if (this.x - this.size/2 < 0 || this.x + this.size/2 > width) {
        this.vx = -this.vx;
        this.bell.play();
      }
  
      if (this.y - this.size/2 < 0 || this.y + this.size/2 > height) {
        this.vy = -this.vy;
        this.bell.play();
      }
    }
  
    
  
    display() {
      push();
      noStroke();
      fill(this.fill.r,this.fill.g,this.fill.b);
      rect(this.x,this.y,this.size);
      pop();
    }
  
  }