var player1, player2
var gameState=2
var PLAY=1
var start=2
var END=0

var time=3


function preload(){
  sound1=loadSound("Wrong Clakson Sound Effect.mp3")
  sound2=loadSound("Player1 wins.mp3")
  sound3 = loadSound("Player2 wins.mp3")
  character01=loadImage("character1.png")
  character02=loadImage("character2.png")
  endImg = loadImage("end2.jpg")
  gameOverImg = loadImage("Game over.jpg")
  

}

function setup(){
  createCanvas(1000,1000)
 
 player1=createSprite(900,980,40,40)
 player1.addImage(character01)
  player1.scale=(0.4)
  player1.visible=false
  player2=createSprite(900,980,40,40)
  player2.scale=(0.17)
  player2.visible=false
  player2.addImage(character02)
  wall1= createSprite(150,95,20,210)
  wall1.shapeColor=color(118,57,49)
  wall1.visible=false
  wall2= createSprite (80,280,160,20)
  wall2.shapeColor=color(118,57,49)
  wall2.visible=false
  wall3= createSprite (120,450,250,20)
  wall3.shapeColor=color(118,57,49)
  wall3.visible=false
  wall4 = createSprite(240,290,20,440)
  wall4.shapeColor=color(118,57,49)
  wall4.visible=false
  wall5 = createSprite(400,85,300,20)
  wall5.shapeColor=color(118,57,49)
  wall5.visible=false
  wall6 = createSprite(800,85,400,20)
  wall6.shapeColor=color(118,57,49)
  wall6.visible=false
  wall7 = createSprite(570,190,650,20)
  wall7.shapeColor=color(118,57,49)
  wall7.visible=false
  wall8 = createSprite(900,225,20,90)
  wall8.shapeColor=color(118,57,49)
  wall8.visible=false
  wall9 = createSprite(900,350,350,20)
  wall9.shapeColor=color(118,57,49)
  wall9.visible=false
  wall10 = createSprite(735,320,20,100)
  wall10.shapeColor=color(118,57,49)
  wall10.visible=false
  wall11 = createSprite(530,280,420,20)
  wall11.shapeColor=color(118,57,49)
  wall11.visible=false
  wall12 = createSprite(350,410,20,250)
  wall12.shapeColor=color(118,57,49)
  wall12.visible=false
  wall13 = createSprite(415,540,150,20)
  wall13.shapeColor=color(118,57,49)
  wall13.visible=false
  wall14 = createSprite(550,450,20,190)
  wall14.shapeColor=color(118,57,49)
  wall14.visible=false
  wall15 = createSprite(745,540,375,20)
  wall15.shapeColor=color(118,57,49)
  wall15.visible=false
  wall16 = createSprite(465,650,940,20)
  wall16.shapeColor=color(118,57,49)
  wall16.visible=false
  wall17 = createSprite(925,590,20,120)
  wall17.shapeColor=color(118,57,49)
  wall17.visible=false
  wall18 = createSprite(550,800,940,20)
  wall18.shapeColor=color(118,57,49)
  wall18.visible=false
  wall19 = createSprite(600,675,20,40)
  wall19.shapeColor=color(165,113,78)
  wall19.visible=false
  wall20 = createSprite(300,675,20,40)
  wall20.shapeColor=color(165,113,78)
  wall20.visible=false
  wall21 = createSprite(400,820,20,60)
  wall21.shapeColor=color(165,113,78)
  wall21.visible=false
  wall22 = createSprite(750,820,20,60)
  wall22.shapeColor=color(165,113,78)
  wall22.visible=false
  end1 = createSprite(985,915,20,100)
  end1.visible=false
  end1.addImage(endImg)
  gameOver = createSprite(500,500)
  gameOver.scale=4
  gameOver.addImage(gameOverImg)
  gameOver.visible=false


  wall19.velocityY=+2.7
  wall20.velocityY=+2.7
  wall21.velocityY=+3.7
  wall22.velocityY=+3.7

}

function draw(){
  background("white")

  if(gameState===2){
    background("cyan")
    textSize(27)
    fill("red")
    stroke("white")
    text("MAZE",430,20)
    text("Keys for player1-",250,150)
    text("To move Player1 right, press right arrow",200,200)
    text("To move Player1 left, press left arrow",200,250)
    text("To move Player1 up, press up arrow",200,300)
    text("To move Player1 down, press down arrow",200,350)
   
    text("Keys for player 2-",250,450)
    text("To move Player2 right, press right arrow",200,500)
    text("To move Player2 left, press left arrow",200,550)
    text("To move Player2 up, press up arrow",200,600)
    text("To move Player2 down, press down arrow",200,650)
    textSize(35)
    fill("blue")
    text("*TO PLAY CLICK ON SPACE KEY",200,850)

  }
if(keyDown("space") && gameState==2){
 gameState=1
}
  
  if(gameState===1){
    player1.visible=true
    player2.visible=true
    wall1.visible=true
    wall2.visible=true
    wall3.visible=true
    wall4.visible=true
    wall5.visible=true
    wall6.visible=true
    wall7.visible=true
    wall8.visible=true
    wall9.visible=true
    wall10.visible=true
    wall11.visible=true
    wall12.visible=true
    wall13.visible=true
    wall14.visible=true
    wall15.visible=true
    wall16.visible=true
    wall17.visible=true
    wall18.visible=true
    wall19.visible=true
    wall20.visible=true
    wall21.visible=true
    wall22.visible=true
    end1.visible=true
  

    edges=createEdgeSprites()
  wall19.bounceOff(wall18)
  wall19.bounceOff(wall16)
  wall20.bounceOff(wall18)
  wall20.bounceOff(wall16)
  wall21.bounceOff(edges)
  wall21.bounceOff(wall18)
  wall22.bounceOff(edges)
  wall22.bounceOff(wall18)

  player1.collide(wall1)
  player1.collide(wall2)
  player1.collide(wall3)
  player1.collide(wall4)
  player1.collide(wall5)
  player1.collide(wall6)
  player1.collide(wall7)
  player1.collide(wall8)
  player1.collide(wall9)
  player1.collide(wall10)
  player1.collide(wall11)
  player1.collide(wall12)
  player1.collide(wall13)
  player1.collide(wall14)
  player1.collide(wall15)
  player1.collide(wall16)
  player1.collide(wall17)
  player1.collide(wall18)
  player1.collide(edges)
 
  player2.collide(wall1)
  player2.collide(wall2)
  player2.collide(wall3)
  player2.collide(wall4)
  player2.collide(wall5)
  player2.collide(wall6)
  player2.collide(wall7)
  player2.collide(wall8)
  player2.collide(wall9)
  player2.collide(wall10)
  player2.collide(wall11)
  player2.collide(wall12)
  player2.collide(wall13)
  player2.collide(wall14)
  player2.collide(wall15)
  player2.collide(wall16)
  player2.collide(wall17)
  player2.collide(wall18)
  player2.collide(edges)


  player1.velocityX=0
  player1.velocityY=0
  player2.velocityX=0
  player2.velocityY=0
  if(player1.isTouching (end1)){
    gameState=0
  }
  if(player2.isTouching (end1)){
   gameState=0
  }
  if(player1.isTouching (wall19)||player1.isTouching (wall20)||player1.isTouching(wall21)||player1.isTouching(wall22)){
    player1.x=30
    player1.y=45
  sound1.play()
  }
  if(player2.isTouching (wall19)||player2.isTouching (wall20)||player2.isTouching(wall21)||player2.isTouching(wall22)){
    player2.x=90
    player2.y=75
    sound1.play()
  }

 

  if(keyDown("right")){
    player1.velocityX=+4.5
    player1.velocityY=0
  }
  if(keyDown("left")){
    player1.velocityX=-4.5
    player1.velocityY=0
  }
  if(keyDown("up")){
    player1.velocityX=0
    player1.velocityY=-4.5
  }
  if(keyDown("down")){
    player1.velocityX=0
    player1.velocityY=+4.5
  }

  if(keyDown("d")){
    player2.velocityX=+4.5
    player2.velocityY=0
  }
  if(keyDown("a")){
    player2.velocityX=-4.5
    player2.velocityY=0
  }
  if(keyDown("w")){
    player2.velocityX=0
    player2.velocityY=-4.5
  }
  if(keyDown("s")){
    player2.velocityX=0
    player2.velocityY=+4.5
  }
}


  drawSprites()

   if(gameState===0){
     //Timer is set to 3 and will be decremented and once it is less than 0 gamestate will change
    time=time-0.1
    console.log(time)
    if(time<=0){
      gameState=3
      time=0
    }
    if(player1.isTouching (end1)){
      
      sound2.play()
      fill("red")
      textSize(50)
      text("PLAYER1 WON THE GAME",200,670)
      
      
    
    }
    
    if(player2.isTouching (end1)){
     
      sound3.play()
      fill("red")
      textSize(50)
      text("PLAYER2 WON THE GAME",200,670)
     
    }
  }
  if(gameState===3){
    gameOver.visible=true
    sound2.stop()
    sound3.stop()
  }
}