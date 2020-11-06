
var particles = [];
var plinko = [];
var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var plinko4 = [];
var divisions = [];
var count = 0;
var pcount = 0;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;
 
function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

  //  particles = new Particles(200,200,200,200);
  
    ground = new Ground(200,775,1200,20);

for(var i = 0; i<= 600 ; i = i+30){
    divisions.push(new Division(i, 800 - divisionHeight/2, 10,divisionHeight));
   
}
//4th layer
for(var k = 40; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,100,10,10));
    count++;
}
//3rd layer
for(var k = 60; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,150,10,10));
    count++;
}
//2nd layer
for(var k = 40; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,200,10,10));
    count++;
}

//1st layer
for(var k = 60; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,250,10,10));
    count++;
}

}

function draw(){
    background("black");
   
    Engine.update(engine);

  //if(pcount <= 4 )
    spawnBalls();
    ground.display();

       
    for(var k=0 ; k<count ; k++ )
      plinko[k].display();

      for(var j=0 ; j<=16 ; j++ )
      divisions[j].display();
      if(pcount > 0)
      particles[pcount -1].display();

}

function spawnBalls()
{
    if(frameCount%180===0){
        console.log("inside if "); 
         particles.push(new Particles(random(480/2-10,480/2+10),20,10))
         console.log("count :" + pcount );
         pcount++;
     }
}