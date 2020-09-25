
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,danda1,danda2,danda3,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	 danda1 = new Metal(900,660,150,90);
	 danda2 = new Metal(820,620,100,180);
	 danda3 = new Metal(980,620,100,180);
	 
	 ground = new Ground(200,height,width,20)

	 ball1 = new ball(280,580);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  danda1.display()
  danda2.display()
  danda3.display()
  ball1.display();
  
  drawSprites();

  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:3,y:-5})  
  }
 
}


