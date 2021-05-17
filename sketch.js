const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisionHeight=300;
var divisions=[];
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(800,480);
  
  engine = Engine.create();
  world=engine.world;

	ground=new Ground(400,690,800,20);

  for(var i=0; i<=width; i=i+80 ){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
  for(var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  for(var h=0; h<particles.length; h++){
    particles[h].display();
  }
  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


  ground.display();

  drawSprites();
}