var Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies;

var engine;
var circles=[];
var boxes=[];
var bounds=[];

function setup(){
createCanvas(800,800);
engine=Engine.create();
world= engine.world;
var options={
  isStatic:true
}
    bounds.push(new Bound(400, 260, width*0.3, 20,-0.4));
    bounds.push(new Bound(185, 89, width*0.3, 20,0.5));
    bounds.push(new Bound(185, 430, width*0.3, 20,0.4));
}
function mouseDragged(){
  circles.push(new Circle(mouseX,mouseY,random(5,20)));
  boxes.push(new Box(mouseX,mouseY,random(10,20),random(20,10)));
 }
function draw(){
  background(255);
  
  Engine.update(engine);
  for(var i= 0; i < circles.length; i++){
    circles[i].show();
    if(circles[i].isOffscreen()){
      circles[i].removeFromWorld();
    circles.splice(i,1);
      i--;
    }
  }
  for(var i= 0; i < boxes.length; i++){
    boxes[i].show();
    //for deleting the bodies when out of the playground
    if(boxes[i].isOffscreen()){
      boxes[i].removeFromWorld();
    boxes.splice(i,1);
      i--;
    }
  }
  for(var i= 0;i < bounds.length;i++){
     bounds[i].show();
  }
  console.log(circles.length,world.bodies.length);
  }
