
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;
var ground,ground1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(50,500,600,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  ground=createSprite(300,550,1200,10)
 // ground.addAnimation("moving",)
  ground.velocityX=-2;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
   score = score + Math.round(getFrameRate()/60);
  textSize(20);
  text("Survival Time = "+score,400,50)
  
  if (ground.x<0){
    ground.x=ground.width/2
  }
  if (keyDown("space")&&monkey.y>480){
    monkey.velocityY=-20
    
  }
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)
  food();
  obstacle1();
  drawSprites();
  
}

function food(){
  if (frameCount%80===0){
    banana=createSprite(610,300,10,10);
    banana.addImage("banana",bananaImage)
    banana.velocityX=-3
    banana.y=Math.round(random(300,400))
    banana.scale=0.1
    banana.lifetime = 200;
    
  }
}
function obstacle1(){
  if (frameCount%300===0){
    obstacle=createSprite(610,520,10,10);
    obstacle.addImage("banana",obstacleImage)
    obstacle.velocityX=-2
    obstacle.lifetime = 300;
    obstacle.scale=0.15
  }
}







