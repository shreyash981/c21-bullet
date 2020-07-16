var bullet,wall,speed,weight , damage , thickness;


function setup() {
  createCanvas(1600,400);
speed  = random(223 , 321);
weight = random (30 ,52) ; 
thickness == random(22 ,83);
bullet = createSprite (50 ,200 , 20 ,10 );
wall = createSprite (1200 ,200 , thickness ,height/2 );
wall.shapeColor="BLUE";
//wall.shapeColor = color(80,80,80);
 bullet.velocityX = speed ;


}

function draw() {
  background(255,255,255);  
  
 if(wall.x-bullet.x  < bullet.width /2 + wall.width/ 2)  {
  bullet.velocityX = 0 ;
 damage = bullet.weight * bullet.speed *bullet.speed / 3* thickness ;


if(deformation < 10  ){
  wall.shapeColor = "green" ;
}
else if(damage >10 ){
  wall.shapeColor ="red";
 
}
}
  drawSprites();
}