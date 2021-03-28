const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	topBlockObj = new topBlock (425,300,250,20);
	bobObject1 = new endDot (340,470,20)
	bobObject2 = new endDot (380,470,20)
	bobObject3 = new endDot(420,470,20)
	bobObject4 = new endDot (460,470,20)
	bobObject5 = new endDot (500,470,20);
	string1= new string(bobObject1.body,topBlockObj.body,-40*2, 0);
	string2= new string(bobObject2.body,topBlockObj.body,-20*2,0);
	string3= new string(bobObject3.body,topBlockObj.body,-0*2,0);
	string4= new string(bobObject4.body,topBlockObj.body,20*2,0);
	string5= new string(bobObject5.body,topBlockObj.body,40*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMo=(CENTER);
  background("yellow");
  
  topBlockObj.display()
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  textSize(20);
  text("NEWTON'S CRADLE",370,600);
}

function drawLine (constraint) {
	bobBodyPosition = constraint.bodyA.position;    
	topBlockBodyPosition = constraint.bodyB.position;
	topBlockBodyOffset = constraint.pointB;
	topBlockBodyX= topBlockBodyPositiion.x + topBlockBodyOffset.x;
	topBlockBodyY= topBlockBodyPosition.y + topBlockBodyOffset.y; 
	line(bobBodyPosition.x, bobBodyPosition.y, topBlockBodyX, topBlockBodyY);           
}


function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-45});
	}
}