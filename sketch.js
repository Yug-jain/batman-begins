const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine
var myWorld,myEngine
var maxdrops=100
var drops=[]



function preload(){
    
}

function setup(){
   myEngine=Engine.create()
   myWorld=myEngine.world
   createCanvas(400,700)
   umbrella=new Umbrella(200,500)
   if(frameCount%150===0){
       for(var i=0;i<maxdrops;i++){
           drops.push(new Drop(random(0,400),random(0,400)))
       }

       
   }
    
}

function draw(){
 Engine.update(myEngine) 
 background(0)
umbrella.display()  
for(var i=0;i<maxdrops;i++){
  drops[i].showDrops()
  drops[i].updateyposition()
}
drawSprites()
}   

