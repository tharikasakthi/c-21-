var fixedRect, movingRect;
var gameobject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1000, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameobject1=createSprite(100,400,50,50);
  gameobject1.shapeColor="blue";

  movingRect.velocityX = -5;
  gameobject1.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,gameobject1);

  drawSprites();
}

