
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 // Added style.css file and added few things in index.html like in first line language en should be there 
 //and included libraries.Please refer all the code changes ... almost for every code change I have added comments ..
 //Please go through all the files in the project.

var ground,side1,side2,side3,side4;
var particles=[],plinkos=[],divisions=[] ;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,795, 480, 10);
	side1 = new Side(240,2.5,480,5);
	side2 = new Side(2.5,400,5,800);
	side3 = new Side(240,797.5,480,5);
	side4 = new Side(477.5,400,5,800);



	for(var i=0;i<=width ;i=i+80){
		//changed 250 to 650
		divisions.push(new Divisions(i,650,10,300)); 
	}
    // added j=j+50
	for(var j=40; j<=width;j=j+50){
		plinkos.push(new Plinkos(j,75,10));
	}
    // added j=j+50 and 10 for radius
	for(var j=15;j<=width-10;j=j+50){
		plinkos.push(new Plinkos(j,175,10));
	}
     // added j=j+50
	for(var j=40; j<=width;j=j+50){
		plinkos.push(new Plinkos(j,275,10));
	}
    // added j=j+50 and 10 for radius
	for(var j=15;j<=width-10;j=j+50){
		plinkos.push(new Plinkos(j,375,10));
	}


	Engine.run(engine);
  
}


function draw() {
 //removed rectMode center
  background(0);
  Engine.update(engine);

	if(frameCount%60===0){
		particles.push(new Particle(random(width/2-10,width/2+10),10,10))
	}

	for(var p=0;p<particles.length;p++){

		particles[p].display();
	}

	for(var i=0;i<divisions.length;i++){

		divisions[i].display();
	}
 // removed j=j++ just given j++
	for(var j=0;j<plinkos.length;j++){

		plinkos[j].display();
	}


  
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  side4.display();
//removed drawSprites and added below line to know x and Y
  text ("X:"+mouseX+"Y:"+mouseY,mouseX,mouseY);
 
}



