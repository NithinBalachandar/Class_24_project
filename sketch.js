const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(50,50,20,20);
    ground1 = new Ground(600,390,1200,20);
    dustbin1 = new Dustbin(1100,370,100,10);
    dustbin2 = new Dustbin(1050,330,10,100);
    dustbin3 = new Dustbin(1150,330,10,100);
    Engine.run(engine);
}

function draw(){
    background(0);
ball1.display();
ground1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
}


