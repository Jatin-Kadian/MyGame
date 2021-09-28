var brick1img
var gameState = "play"
var keyCollected = false , coins = 0

function preload(){
 brick1img = loadImage("images/brick1.png")
 playerimg = loadImage("images/player.png")
 fireimg = loadImage("images/fire.png")
 doorimg = loadImage("images/door.png")
 coinimg = loadImage("images/coin.png")
 keyimg = loadImage('images/key.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  brickGroup = new Group()
  fireGroup = new Group()


  buildBricks(100,height/2-200,10)
  buildBricks(width/2,height/2,5)
  buildBricks(width-300,200,3)
  buildBricks(width-400,height/2-100,5)
  buildBricks(500,height-400,7)
  buildBricks(300,height/2+300,6)
  buildBricks(width/2+100,height-150,7)
  buildBricks(width-500,height/2+200,5)
  buildBricks(width-250,height-25,10)
  buildBricks(width-100,height-10,10)

  player = createSprite(100,100,10,10)
  player.addImage(playerimg)
  player.scale = 0.15
  player.debug = true 

  for (var i = 25;i< width-275; i = i+50){
   var fire = createSprite(i,height-25,10,10)
   fire.addImage(fireimg)
   fire.scale = 0.19
   fireGroup.add(fire)
  }

  door = createSprite (width-50,height-130,10,10)
  door.addImage(doorimg)
  door.scale = 0.4

  key1 = createSprite (400,height/2+240,10,10)
  key1.addImage(keyimg)
  key1.scale = 0.7

  edges = createEdgeSprites()
  
  
  coin1 = createSprite(200,height/2-260,10,10)
  coin1.addImage(coinimg)
  coin1.scale = 0.8
  coin2 = createSprite(width-200,140,10,10)
  coin2.addImage(coinimg)
  coin2.scale = 0.8
  coin3 = createSprite(width/2+200,height-210,10,10)
  coin3.addImage(coinimg)
  coin3.scale = 0.8
  coin4 = createSprite(width/2+100,200,10,10)
  coin4.addImage(coinimg)
  coin4.scale = 0.8
}

function draw() {
  background("black"); 
  textSize(30)
  stroke("white")
text("Coins Collected = "+coins , width/2,50)

  
  if(keyDown("up")){
    player.collide(brickGroup)
      player.y = player.y-20
  }
  if(keyDown("left")){
    player.collide(brickGroup)
    player.x = player.x-10
}
if(keyDown("right")){
  player.collide(brickGroup)
  player.x = player.x+10
}
  player.velocityY = player.velocityY+1
 player.collide(brickGroup)

  if (player.isTouching(fireGroup)){
   gameState = "end"
   player.destroy()
  }
  if (gameState == "end"){
    textSize(30)
    stroke("white")
  text("GAME OVER" , width/2,height/2-200)
  }

  if(player.isTouching(key1)){
   keyCollected = true
   key1.visible = false    
  }

  if (keyCollected== false) {
    player.collide(door)
  } else {
    if (player.isTouching(door)){
    player.visible = false 
    textSize(30)
    stroke("white")
  text("YOU WON" , width/2,height/2-200)
    }
  }
player.collide(edges)

 if (player.isTouching(coin1)){
   coin1.destroy()
   coins ++
 }
 if (player.isTouching(coin2)){
  coin2.destroy()
  coins ++
}
if (player.isTouching(coin3)){
  coin3.destroy()
  coins ++
}
if (player.isTouching(coin4)){
  coin4.destroy()
  coins ++
}



  drawSprites();
}
function buildBricks (x,y,num){
   for (var i=0;i<num;i=i+1){
   var brick = createSprite(x+50*i,y,50,50)
   brick.debug = true 
   brick.addImage(brick1img)
   brick.scale= 0.024
   brickGroup.add(brick)
   }

}















