class Flower {

    // constructor with flower's parameters
    constructor(x, y, size, stemLength, petalColor) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.stemLength = stemLength;
      this.stemThickness = 10;
      this.petalThickness = 10;
      // color of the flower
      this.stemColor = {
        r: 50,
        g: 150,
        b: 50
      };
      this.petalColor = petalColor;
      this.centreColor = {
        r: 50,
        g: 0,
        b: 0
      };
    }
    
    //displaying the flower using shapes

    display() {
      push();
      // strokeweight = the variable in stemThickness
      strokeWeight(this.stemThickness);

      //the stem consists of a line

      stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
      line(this.x, this.y, this.x, this.y + this.stemLength);

      // circle with an outline = flower

      strokeWeight(this.petalThickness);
      fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
      stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }