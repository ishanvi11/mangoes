const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engeine,world;
var ground,tree;
var boy;
var m1,m2,m3,m4,m5;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	ground= new Ground()
	tree= new Tree()
	boy= new Boy()
	m1= new Mango(1010,110)
	m2= new Mango(1025,225)
	m3= new Mango(925,200)
	m4= new Mango(800,75)
	m5=new Mango(950,100)
	stone=new Stone()
	sling= new Chain(stone.body,{x:70,y:275})

}


function draw() {
  
  background(220);
  ground.display()
  tree.display()
  m1.display()
	m2 .display()
	m3.display()
	m4.display()
	m5.display()
	sling.Display()
	stone.display()
	boy.display()
	detectcollision(stone,m1);
	detectcollision(stone,m2);
	detectcollision(stone,m3);
	detectcollision(stone,m4);
	detectcollision(stone,m5);
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235,y:420})
		launcherObject.attach(stone.body);
	}
}