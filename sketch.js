
var trex ,trex_running;
var cloud;

var cloudimage
function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
  groundImage = loadImage('ground2.png');
  cloudimage = loadImage('cloud.png')
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
 trex = createSprite(50,180,20,50);
 trex.addAnimation('running',trex_running);
 trex.scale=0.6;

 ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;
 ground.velocityX = -10;

 invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw(){
  background("white")
  //make trex jump
  if(keyDown('space') && trex.y >=150){
    trex.velocityY= -10 
  }

console.log(trex.y)
  if(ground.x < 0){

    ground.x = ground.width/2;

  }
  //add gravity
  trex.velocityY=trex.velocityY + 0.8

  trex.collide(invisibleGround);

  spawnclouds()
  drawSprites();

}
function spawnclouds(){
if (frameCount %60===0){
  cloud=createSprite(600,100,40,10)
  cloud.addImage (cloudimage)
  cloud.velocityX = -4
  cloud.y = Math.round(random(10,100))
}


}
