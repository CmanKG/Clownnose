var nosex=0
var nosey=0
function preload(){
    clown_nose=loadImage("Clown_nose.png")
}
function setup(){
   canvas=createCanvas(400,400)
   canvas.center()
   video=createCapture(VIDEO)
   video.size(300,300)
   video.hide()
}
function draw(){
    image(video,0,0,400,400)
    fill("red")
    noStroke()
    circle(nosex,nosey,20)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function modelloaded(){
    console.log("model_is_loaded")
}
function gotposes(results){
    if (results.length>0) {
      console.log(results)
nosex=results[0].pose.nose.x+55
nosey=results[0].pose.nose.y+50
console.log(nosex,nosey)
    }
}