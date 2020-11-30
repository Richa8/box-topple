const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,world;
var box1,box2;
var ground;

function setup(){
createCanvas(400,400);

engine=Engine.create();
world=engine.world;

box1=new Box(200,100,50,50);
box2=new Box(230,200,50,50);
ground=new Ground(200,390,400,10);
}

function draw(){
background(0);
Engine.update(engine);
 
box1.display();
box2.display();
ground.display();
}