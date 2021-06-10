var groundD,groundT,groundB,ground=[],invisibleGround;
var cracker,crackerImage;
var ball,ballImage;
var fire,fireAnimation;
var brickImage;
var angle = 0;

function preload(){
  crackerImage = loadImage("images/cracker.png");
  ballImage = loadImage("images/ball.png");
  brickImage = loadImage("images/brick2.png");
  firAnimation = loadAnimation("images/fire3.png","images/fire2.png","images/fire1.png");
}

function setup() {
  createCanvas(1000,800);

  for(var i=0;i<6000;i = i+100){
    for(var j = 620;j < 820;j = j+ 50){
      ground.push(groundD = createSprite(i,j,100,50));
      groundD.addImage(brickImage);
      groundD.debug = true;
    }
  }
  // for(var i=-500;i<0;i = i+100){
  //   for(var j = 20;j < 820;j = j+ 50){
  //     ground.push(groundB = createSprite(i,j,100,50));
  //     groundB.addImage(brickImage);
  //     groundB.debug = true;
  //   }
  // }

  for(var i= 0;i<6000;i = i+100){
    for(var j = 20;j < 220;j = j+ 50){
      ground.push(groundT = createSprite(i,j,100,50));
      groundT.addImage(brickImage);
      groundT.debug = true;
    }
  }

  ball = createSprite(0,400,40,40);
  ball.addImage(ballImage);
  ball.scale = 0.03;
  ball.debug = true;
  ball.setCollider("circle");

}

function draw() { 
  background(0);

  camera.x =  ball.x;

    ball.collide(ground);


  ball.velocityY += 1;


  if(keyDown(RIGHT_ARROW)){
    ball.velocityX = 15;
    angle += 10;
    ball.rotation = angle;

  }
  if(keyWentUp(RIGHT_ARROW)){
    ball.velocityX = 0;
  }
  if(keyDown(LEFT_ARROW)){
    ball.velocityX = -15;
    angle -= 10;
    ball.rotation = angle;

  }
  if(keyWentUp(LEFT_ARROW)){
    ball.velocityX = 0;
  }




  drawSprites();
  text(mouseX + "  "+ mouseY,ball.x + 200,500);
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    ball.velocityY = -20;
  }
}



