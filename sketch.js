var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation, playerAnimation;
var school;
var city;

function preload()
{
 carAnimation1=loadAnimation("images/car1.png");
 carAnimation2=loadAnimation("images/car2.png");
 playerAnimation=loadAnimation("images/Player-03.png");
 logAnimation=loadAnimation("images/log1.png");
 logAnimation=loadAnimation("images/log2.png");
 cityAnimation=loadAnimation("images/city1.png");
 cityAnimation=loadAnimation("images/city2.png");
}

function setup() {
  createCanvas(1366,2700);

  city=createSprite(width/2,-1500);
  city.addAnimation("city",cityAnimation)

  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*4800),width,grassHeight);
    if(i%2===0)
    {
      var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "grey";
  }
  for(var i = 0; i < 40; i++){
    cars = new Car(2);
    carGroup1.add(cars.spt)
  }
  for(var i = 0; i < 40; i++){
    log = new Log(2);
    logGroup1.add(log.spt)
  }
for(i=1;i<logGroup1.length;i++){
  if(logGroup1[i].x<0)
  {
    logGroup1[i].x=width;
  }
}
for(i=1;i<carGroup1.length;i++){
  if(carGroup1[i].x<0)
  {
    carGroup1[i].x=width;
  }

  carGroup1 = new Group();
  logGroup1 = new Group();
  player=new Player(width/2,height-25);
  
 function keyPressed(){
if(keyCode==UP_ARROW){
  player.move(0,-2);
}else if(keyCode==DOWN_ARROW){
  player.move(0,2);
}else if(keyCode==LEFT_ARROW){
  player.move(-2,0);
}else if(keyCode==RIGHT_ARROW){
  player.move(2,0)
}
 }
   
 }

function draw() {
  background("skyblue");
 translate(0,-player.spt.y+height-150)
 
 if(city.isTouching(player.spt)){
   gameState = "Win";
 }
if(gameState === "Win")
{
  stroke("Green");
  fill("Green");
  textSize(40);
  text("Congratulations! You Made It.",width/2-250,-1700);
  carGroup1.destroyEach();
  logGroup1.destroyEach()
}
  drawSprites();
}
}
