var obj1, obj2;
var car, wall;
function setup () {
  createCanvas(1000,1000);
  obj1=createSprite(100, 300,30,30);
  obj1.velocityX=3;
  car=createSprite(200, 500,30,30);
  car.velocityX=4;
  wall=createSprite(50, 500,30,30);
  obj2=createSprite(700,300,30,90);
} 
function draw() {
  background(255);
  if(isTouching(car,wall)) {
    car.velocityX=0;
  }
  else {
    wall.shapeColor="green";
  }
  //bounceOff(car,wall);
  drawSprites();
}

function isTouching(obj1,obj2) {
  if(obj2.x-obj1.x<=obj1.width/2+obj2.width/2&&
    obj1.x-obj2.x<=obj1.width/2+obj2.width/2&&
    obj2.y-obj1.y<=obj1.height/2+obj2.height/2&&
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2) {
      return true;
    }
    else {
      return false;
    }
}