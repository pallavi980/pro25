class Paper {
    constructor(x, y,radius) {
    this.radius=radius;

      var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
      }
      
     this.body=Bodies.circle(x,y,radius,options);
     this.image = loadImage("sode/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(pos.x,pos.y,this.radius,this.radius);
      
    }
  };
  