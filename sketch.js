var bgImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse
var engine,world
var particles = [];
var bell = [];



function preload()
{
	bgImg = loadImage("snow4.jpg");
}



function setup() {
	createCanvas(1000,700);
  
	engine = Engine.create();
	world = engine.world;
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
 
 
  if (frameCount %20 === 0) {
    particles.push(new Snow(random(10,300),200,400));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  if (frameCount %40 === 0) {
    bell.push(new Ball(random(10,300),200,400));
  }
  
  for (var h = 0; h<bell.length; h++) {
    bell[h].display();
  }

  

 

  strokeWeight(3);
 
 
  drawSprites();

  
  
  
}
