
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

//adding functions to the monkey sprite
monkey= createSprite(80,315,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;
//adding functions to the ground sprite
ground= createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;

  
}


function draw() {
  
  background(225);
  
//resetting the ground
  if(ground.x<0){
   ground.x=ground.width/2;
   }
//making the monkey jump when space is pressed
  if(keyDown("space")){
  monkey.velocityY=-12;
   }
//adding gravity
monkey.velocityY=monkey.velocityY + 0.8;
//making the monkey walk on ground rather than air
monkey.collide(ground);
  
drawSprites();

}

function survivalTime(){

stroke(white);
textSize(20);
fill(white);
text("score",score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time"+ survivalTime,100,50);
}






