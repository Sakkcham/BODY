const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var box2;
var engine, world;
var ground;
 
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

     
    box1=new Box(200,300,50,50); 
    ground=new Ground(200,390,400,30);
    box2=new Box(230,250,50,50);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    ground.display();
    box2.display();
}
