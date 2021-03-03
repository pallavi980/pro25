
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var ground;
var ball;
var call;
function preload()
{
	
	
}

function setup() {
	createCanvas(800,700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

   
	engine = Engine.create();
	world = engine.world;
    // createSprite();
	//Create the Bodies Here.
	wall1=new Wall(510,650,180,20);
	wall2=new Wall(695,610,20,120)
	wall3=new Wall(505,610,20,120)
	ball=new Paper(120,640,20);
	
	
   
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(0);
drawSprites();


 
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  
  
  
}
function keyPressed(){
  if (keyCode===32){
Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-55})
	
  }

}



