const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundimg
function preload()
{
  backgroundimg=loadImage("bg.jpg")
}
function setup() {
  createCanvas(1500, 500);


    engine = Engine.create();
    world = engine.world


}
  
   
function draw() {
  background(backgroundimg);
 
    Engine.update(engine);


}

