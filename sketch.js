var backGround,backGroundImg;
var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;
var catLastImg,mouseLastImg;

function preload() {

    //load the images here
    backGroundImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catLastImg = loadAnimation("cat4.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseLastImg = loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);

    backGround = createSprite(500,370,50,50);
    backGround.addImage("garden",backGroundImg);
    backGround.scale = 1.2

    //create tom and jerry sprites here
    cat = createSprite(750,620,20,20);
    cat.addImage("cat",catImg);
    cat.scale = 0.15;

    mouse = createSprite(150,620,20,20);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.15;

}

function draw() {

    background("white");

    keyPressed();

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("catLastImage",catLastImg);
       cat.changeAnimation("catLastImage");

       mouse.addAnimation("mouseLastImage",mouseLastImg);
       mouse.changeAnimation("mouseLastImage");

       cat.x = 250;

    }

    drawSprites();

    //text(mouseX + ',' + mouseY,10,150);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
    
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
   
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouseScared");
  
  }
}
