const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball, ball_options;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    var ball_options ={
        restitution: 1.5
    }

    ball = Bodies.circle(200,100,50,ball_options);
    World.add(world,ball);

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);
}
