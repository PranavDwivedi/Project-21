var canvas;
var music;
var block1, block2, block3, block4, ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

block1 = createSprite(90, 580, 180, 30);
block1.shapeColor = "blue";
block2 = createSprite(290, 580, 180, 30);
block2.shapeColor = "rgb(255, 128, 0)";
block3 = createSprite(490, 580, 180, 30);
block3.shapeColor = "#D00A66";
block4 = createSprite(690, 580, 180, 30);
block4.shapeColor = "green";

    //create ball sprite and give velocity

ball = createSprite(400, 300, 50, 50);
ball.shapeColor = "white";

}

function draw() {
    background(rgb(169,169,169))

music.play();
    //create edgeSprite

createEdgeSprites();

ball.velocityX = -5;
ball.velocityX = 5;
ball.velocityY = 5;
ball.velocityY = -5;
ball.bounceOff(block1);
ball.bounceOff(block2);
ball.bounceOff(block3);
ball .bounceOff(block4);

    //add condition to check if ball touching surface and make it ball

    if(block1.isTouching(ball) && BhxBrowser.bounceOff(block1))
{

    ball.shapeColor = "white";

}

    if(block1.isTouching(ball))
{

ball.shapeColor = "blue";
ball.velocityX = 0;
ball.velocityY = 0;
music.stop();

}

if(block2.isTouching(ball))
{

ball.shapeColor = "rgb(255, 128, 0)";
ball.velocityX = 0;
ball.velocityY = 0;
music.stop();

}

if(block3.isTouching(ball))
{

ball.shapeColor = "#D00A66";
ball.velocityX = 0;
ball.velocityY = 0;
music.stop();

}

if(block4.isTouching(ball))
{

ball.shapeColor = "green";
ball.velocityX = 0;
music.stop();

}

drawSprites();

}
