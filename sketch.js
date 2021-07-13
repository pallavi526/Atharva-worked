var Runner, Runner_running, bomb, coin ,energyDrink,power
var path, invisiblepath;

function preload() {
  Runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
   bombImage= loadImage("bomb.png");
   coinImage= loadImage("coin.png");
 pathImage = loadImage("path.png");
  powerImage= loadImage("power.png");
  energyDrinkImage= loadImage("energyDrink.png");
}

function setup() {
  createCanvas(200, 600);

  //create a path sprite
  path = createSprite(200,180,400,20);
  path.addImage("path",pathImage);
  path.x = path.hight/2;
  path.velocityY = 4;
  path.scale=1.2;

  //create a runner sprite
  Runner = createSprite(50,500,20,50);
  Runner.addAnimation("runner", Runner_running);
  Runner.scale=0.1

  coin = createSprite(80,160,20,50);
  coin.addImage("coin", coinImage);
  coin.scale=0.3

   bomb= createSprite(15,160,20,50);
  bomb.addImage("bomb", bombImage);
  bomb.scale=0.3

  energyDrink = createSprite(100,160,20,50);
  energyDrink.addImage("energyDrink", energyDrinkImage);
  energyDrink.scale=0.3
  
  
  invisablepath = createSprite(200,190,400,2);
  invisablepath.visible=false
}

  function draw() {
    background(220);
    if (path.y < 400) {
      path.y = height / 2;
    }
  
    
   // Runner.collide(invisablepath);

   
  
    drawSprites();
  }
    
  
