//Change these for Work and break
var BREAK = 300;
var WORK = 1500;
var LONG_BREAK = 1800;

var time = WORK;
var long = 0;
var timerStarted = false;
var stop = false;
var rest = false;
var text = false;
var start = false


//================================================================================================
//start/stop button
function start_stop(){
    if(start == false){
        stop=false;
        start = true
        text = false;
        document.getElementById("reset").style.opacity = "0.1";
        if (timerStarted == false) {
            setInterval(runTime, 999);
            timerStarted = true;
            text = false;
        }
    }else{
        document.getElementById("reset").style.opacity = "1";
        stop = true
        start = false
    }
}

//reset button
function resetTime() {
    if (start==false){
        document.getElementById("time").innerHTML = "25:00";
        document.getElementById("pText").innerHTML = "Work";
        console.clear();
        stop = true;
        time = WORK;
        long = 0;
    }
}
//================================================================================================
function runTime() {
    if(text == false){
        if (stop) return;

        time -= 1;
        
// algorithm to find minutes and seconds from seconds
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        var clock = minutes + ":" + seconds;

        if (seconds < 10) {
            clock = minutes + ":0" + seconds;
        }

        console.clear();
        console.log(clock);
        document.getElementById("time").innerHTML = clock;

        if (time == 0) {
            if(rest == false) {
                if (long == 4) {
                    long = 0;
                    time = LONG_BREAK;
                    rest = true;
                    text = true;
                    document.getElementById("time").innerHTML = "Take a nice  long break";
                    document.getElementById("pText").innerHTML = "Long Break";
                }else{
                    long += 1;
                    time = BREAK;
                    rest = true;
                    text = true;
                    document.getElementById("time").innerHTML = "Take a break";
                    document.getElementById("pText").innerHTML = "Break";
                }
            }else{
                document.getElementById("time").innerHTML = "GET BACK TO WORK!!!";
                document.getElementById("pText").innerHTML = "Work"; 
                time = WORK;
                rest = false;
                text = true;
            }
        }         
    }   
}
//====================================To_do list==================================================

function add(){
    var boxInput = document.getElementById("box").value
    if(boxInput !=""){
        document.getElementById("tasks").innerHTML = boxInput;
    }
}

function delete(){
      document.getElementById("tasks").innerHTML = "men";
}
