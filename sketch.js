var canvas;
var blueball, redball, yellowball, runner, back, beach;

function preload(){
  blueballImg = loadImage("blueball.png");
  redballImg = loadImage("redball.png");
  yellowballImg = loadImage("yellowball.png");
  runnerImg = loadAnimation("run1.png","run2.png","run3.png");
  back = loadImage("Beach.gif");
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  run = createSprite(displayWidth - 150, displayHeight - 200,20,50);
 
  run.addAnimation("run", runnerImg); 
  run.scale = 0.3;

  ground = createSprite(displayWidth - 150, displayHeight, 100, 20);

}

function draw(){

background(back);
spawnBalls();

if(keyDown("space")){
  run.velocityY = -20;
}

run.collide(ground);

run.velocityY = run.velocityY + 0.8

drawSprites();

}

function spawnBalls(){
  if(frameCount % 100 === 0){
    var obstacle = createSprite(displayWidth-1300, 500);
    obstacle.y = Math.round(random(400,700))
    obstacle.velocityX = 3;

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: obstacle.addImage(blueballImg);
      break;
      case 2: obstacle.addImage(yellowballImg);
      break;
      case 3: obstacle.addImage(redballImg);
      break;
    }
    obstacle.scale = .1;
    obstacle.lifetime = 1500;
    
  }
}
