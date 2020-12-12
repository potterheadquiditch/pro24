
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	box1   = new dustbin(500,540,200,20);
  box2   = new dustbin(400,500,20,100);
	box3   = new dustbin(600,500,20,100);
	paper1 = new paper(100,540,50)
	ground = new Ground(400,580,800,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
  paper1.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
  if( keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:280,y:-350})
  }
}



