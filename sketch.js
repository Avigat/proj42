const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var maxDrops=100;
var thunder1img, thunder2img, thunder3img, thunder4img, thunder1, thunder2, thunder3, thunder4;
var drops=[];
var thunderCreatedFrame=0;
var rand;

function preload(){
    thunder1img=loadImage("images/thunderbolt/1.png");
    thunder2img=loadImage("images/thunderbolt/2.png");
    thunder3img=loadImage("images/thunderbolt/3.png");
    thunder4img=loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine=Engine.create()
    world=engine.world
    canvas = createCanvas(400,650)
    background("black")

    umbrella = new Umbrella(200,500);

    if(frameCount%150===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine)
    background(0);

    rand=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(thunder1img);
            break;
            case 2:thunder.addImage(thunder2img);
            break;
            case 2:thunder.addImage(thunder3img);
            break;
            case 2:thunder.addImage(thunder4img);
            default:break;
        }
    }

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
    }
    umbrella.display();
    drawSprites();
}   

