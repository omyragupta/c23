const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Box1=new Box(200,300,50,50);
  Box2=new Box(240,100,50,100);
ground=new Ground(200,height,400,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
Box1.display();
ground.display();
Box2.display();
}