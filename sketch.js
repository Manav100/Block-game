var canvas;
var music,rect1,rect2,rect3,rect4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     rect1 = createSprite(100,580,150,10)
     fill("green")
    rect2 = createSprite(300,580,150,10)
    fill("blue");
    rect3 = createSprite(500,580,150,10)
    fill("orange")
    rect4 = createSprite(700,580,150,10)
    fill("yellow")
    box = createSprite(400,300,20,20)

    //create box sprite and give velocity
    box.velocityY = 2;
}

function draw() {
    background("black");
    //create edgeSprite
    createEdgeSprites()
   

    drawSprites()
    //add condition to check if box touching surface and make it box
}
