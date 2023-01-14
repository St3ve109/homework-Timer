//Change these for Work and break
const BREAK = 1;
const WORK = 1;
const LONG_BREAK = 1;

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
        stop = false;
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
    if (start == false){
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
        console.log(time);
        document.getElementById("time").innerHTML = clock;

        if (time == 0) {
            start_stop();
            if(rest == false) {
                if (long == 3) {
                    long = 0;
                    time = LONG_BREAK;
                    rest = true;
                    text = true;
                    document.getElementById("break_length").innerHTML = "Time till Long break: 4";
                    document.getElementById("time").innerHTML = "Take a nice  long break";
                    document.getElementById("pText").innerHTML = "Long Break";
                }else{
                    long += 1;
                    time = BREAK;
                    rest = true;
                    text = true;
                    document.getElementById("break_length").innerHTML = "Time till Long break: " + (4 - long);
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
        addpoint(boxInput);
        document.getElementById("box").value = "";
    }
}

function strike(element){
    if(element.style.textDecoration == "line-through"){
            element.style.textDecoration = "none";
        } else {
            element.style.textDecoration = "line-through";
     }
}

function remove(element){
    document.getElementById("box").value = "";
    element.parentNode.remove();

}


window.addEventListener("keydown", checkKey, false);
function checkKey(e){
    if(e.keyCode == "13"){
        add();
    }
}

function addpoint(task) {
    var div = document.createElement("div");
    var button = document.createElement("button");
    var button2 = document.createElement("button");

    button.onclick = function(){strike(this)}
    button2.onclick = function(){remove(this)}
    button.innerHTML = task;

    const trash = new Image(20,20);
    trash.src = 'trash.png';
    button2.appendChild(trash);

    document.getElementById("tasks_list").appendChild(div);
    div.className = "solid";
    div.appendChild(button);
    div.appendChild(button2);
  }
//====================================API_Integration==================================================