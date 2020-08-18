const Bodies = Matter.Bodies;
const World= Matter.World;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  ground = new Ground(600,height,1200,20);
}