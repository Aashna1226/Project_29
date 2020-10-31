class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,10,options);
      World.add(world, this.body);
    }
    display(){
      noStroke();
      fill("brown");
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, 900, 20);
    }
  };
