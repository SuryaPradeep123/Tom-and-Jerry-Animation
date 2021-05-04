var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var gardenImg;

function preload() {

    gardenImg = loadImage("images/garden.png");

    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");

    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");

}

function setup(){

    createCanvas(1000,800);

    tom = createSprite(870,600);
    tom.addAnimation("tom_sitting",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry_standing",jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(gardenImg);
    
    if(tom.x - jerry.x < (tom.width - jerry.width)){
       
       tom.velocityX = 0;
       tom.addAnimation("tom_image4",tomImg3);
       tom.x = 300;
       tom.scale = 0.2;
       tom.changeAnimation("tom_image4");
       jerry.addAnimation("jerry_image4",jerryImg3);
       jerry.scale = 0.15;
       jerry.changeAnimation("jerry_image4",jerryImg3);

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
       
       jerry.addAnimation("Jerry_teasing",jerryImg2);
       jerry.changeAnimation("Jerry_teasing",jerryImg2);

       tom.velocityX = -5;
       tom.addAnimation("tom_walking",tomImg2);
       tom.changeAnimation("tom_walking",tomImg3);

    }

}