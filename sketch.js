var dog,dogImg;
var happyDog,happyDogImg
function preload(){
dogImg=loadImage("dogImg.png")
}
function setup() {
  createCanvas(800,400);
 dog=createSprite(200,200,200,200)
 dog.addImage("dog1",dogImg)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}