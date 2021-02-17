var box
var floor1,floor2,floo3,floor4
function setup(){
    createCanvas(1200,800)
box=createSprite(random(245,1100),50,50)
box.velocityY=5
box.shapeColor="white"


floor1=createSprite(245,750,300,20)
floor1.shapeColor="green"


floor2=createSprite(560,750,250,20)
floor2.shapeColor="yellow"


floor3=createSprite(835,750,250,20)
floor3.shapeColor="blue"


floor4=createSprite(1089,750,220,20)
floor4.shapeColor="red"


}
function draw(){
background(0,0,0);
drawSprites();
if(box.x-floor1.x<=box.width/2+floor1.width/2&&
    floor1.x-box.x<=box.width/2+floor1.width/2&&
    box.y-floor1.y<=box.height/2+floor1.height/2&&
    floor1.y-box.y<=box.height/2+floor1.height/2){
  box.shapeColor="green"
  floor1.shapeColor="green"
  box.velocityY=0
  }
  
  if(box.x-floor2.x<=box.width/2+floor2.width/2&&
    floor2.x-box.x<=box.width/2+floor2.width/2&&
    box.y-floor2.y<=box.height/2+floor2.height/2&&
    floor2.y-box.y<=box.height/2+floor2.height/2){
  box.shapeColor="yellow"
  floor2.shapeColor="yellow"
  box.velocityY=0
  }
 
  if(box.x-floor3.x<=box.width/2+floor3.width/2&&
    floor3.x-box.x<=box.width/2+floor3.width/2&&
    box.y-floor3.y<=box.height/2+floor3.height/2&&
    floor3.y-box.y<=box.height/2+floor3.height/2){
  box.shapeColor="blue"
  floor3.shapeColor="blue"
  box.velocityY=0
  }
  if(box.x-floor4.x<=box.width/2+floor4.width/2&&
    floor4.x-box.x<=box.width/2+floor4.width/2&&
    box.y-floor4.y<=box.height/2+floor4.height/2&&
    floor4.y-box.y<=box.height/2+floor4.height/2){
  box.shapeColor="red"
  floor4.shapeColor="red"
  box.velocityY=0
  }
  }
  
  

  

  











