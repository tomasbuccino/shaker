$pelis[] = array();


function add_element(){

var op1 = $('#peli1').val();
var op2 = $('#peli2').val();

$('#pelis').push(op1);
$('#pelis').push(op2);


var lastX,lastY,lastZ;
var moveCounter = 0;

function onDeviceReady() {
  RandomPick();
    navigator.accelerometer.watchAcceleration(gotMovement, errHandler,{frequency:200}); 
}

function errHandler(e) {
    console.log("--- ERROR ---");
    console.dir(e);
}

function gotMovement(a) {
    if(!lastX) {
        lastX = a.x;
        lastY = a.y;
        lastZ = a.z;
        return;
    }

    var deltaX, deltaY, deltaZ;
    deltaX = Math.abs(a.x-lastX);
    deltaY = Math.abs(a.y-lastY);
    deltaZ = Math.abs(a.z-lastZ);

    if(deltaX + deltaY + deltaZ > 3) {
        moveCounter++;
    } else {
        moveCounter = Math.max(0, --moveCounter);
    }

    if(deltaX !=0 || deltaY != 0 || deltaZ != 0) console.log(deltaX,deltaY,deltaZ,moveCounter);

    if(moveCounter > 1) { RandomPick(); moveCounter=0; }

    lastX = a.x;
    lastY = a.y;
    lastZ = a.z;

}

function RandomPick() {
  var rand = pelis[Math.floor(Math.random() * pelis.length)];
  document.querySelector("#result").innerHTML = rand;
}