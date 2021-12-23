const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var bg;
var snowflake = [];
var engine, world 

function preload (){
bg = loadImage ("snow3.jpg")
}
function setup() {

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);  

  Engine.update(engine);

  if(frameCount%60===0){
    snowflake.push(new Snow(random(width/2-30, width/2+30), 10,60));
    
  }

  for (var j = 0; j < snowflake.length; j++) {
    snowflake[j].display();
  }
};