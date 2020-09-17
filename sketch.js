const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;
var engine, world;
var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795, 480, 10);
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  // creating divisions and plinkos
  for(var k = 0; k <= 480; k = k + 80) {
    divisions.push(new Division(k, (800-divisionHeight/2), 10, divisionHeight));
  }
  for (var index = 40; index <= 480; index = index+50) {
    plinkos.push(new Plinko(index, 75));
  }
  for(var j = 15; j <= 470; j = j + 50) {
    plinkos.push(new Plinko(j, 150));
  }
  for (let k = 40; k <= 480; k = k+50) {
    plinkos.push(new Plinko(k, 225));    
  }
  for (var l = 15; l <= 470; l = l+50) {
    plinkos.push(new Plinko(l, 300));
  }
  if(frameCount % 65 === 0) {
    particles.push(new Particle(random(240 - 100, 240 + 100), 10, 10));
  }

  // displaying everything
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for(var index = 0; index<plinkos.length; index++) {
    plinkos[index].display();
  }
  for (let k = 0; k < plinkos.length; k++) {
    plinkos[k].display();    
  }
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();    
  }
  for(var l = 0; l < particles.length; l++) {
    particles[l].display();
  }
  ground.display();
  
}