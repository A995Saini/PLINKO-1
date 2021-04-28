var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var particles = [];
  var plinkos = [];


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));

      for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));

      for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }
}



function draw() {
  background(255,255,255);  
  drawSprites();
}