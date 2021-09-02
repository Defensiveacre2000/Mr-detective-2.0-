status = "";
objects = [];
function setup()
{
canvas = createCanvas(380 , 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380 , 380);
video.hide();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
//function setup ends here
function modelLoaded()
{
console.log("modelLoaded");
status = true;
}
//function ModelLoaded ends here
function gotResult(error , results)
{
if(error)
{
console.log(error);
}
//if ends here
console.log(results);
objects = results;
}
//function got result ends here
function draw()
{
image(video , 0 , 0 , 380 , 380);
if(status != "")
{
r = random(255);
g = random(255);
b = random(255);
objectDetector.detect(video , gotResult);
//for loop starts here
for(i = 0; i < objects.lenght; i++)
{
document.getElementById("Status").innerHTML = "Status : Object Detected";
document.getElementById("No.Objects").innerHTML = "Number of objects detected are : " + objects.length;
fill(r ,g , b);
P = floor(object[i].confidence * 100);
text(objects[i].label + "" + P + "%" , objects[i].x + 15 , objects[i].y +15);
noFill();
stroke(r , g , b);
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
}
//for loop ends here
}
//if condition ends here
}
//function draw ends here (Last function!!)