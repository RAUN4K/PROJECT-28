
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree;
var mango1,mango2,mango3;
var boy,stone1;

function preload()
{
	mango1 = loadImage
	mango2 = loadImage
	mango3 = loadImage
	boy = loadImage
	tree = loadImage
}

function setup() {
	createCanvas(800, 700);
	var boy = createSprite(stone1,{x:400, y:350});


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground()
	tree = new Tree()
	mango1 = new Ground()
	mango2 = new Ground()
	mango3 = new Ground()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone1.fly();
}