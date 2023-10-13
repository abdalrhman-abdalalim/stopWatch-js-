// first i declare all elements i use
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");
var hour=0,minutes=0,seconds=0,milliseconds=0;
//name.addEventListener is used to make special function only if i click on (name)
start.addEventListener('click',function(){
    timer=true;
    stopwatch();
})
stop.addEventListener('click',function(){
    timer=false;
})
reset.addEventListener('click',function(){
    timer=false;
    hour=0;
    minutes=0;
    seconds=0;
    milliseconds=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("mn").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("millsec").innerHTML="00";
})
// declare function to make stopwatch 
function stopwatch(){
    if(timer)milliseconds++;
    if(milliseconds==100){
        seconds++;
        milliseconds=0;
    }
    if(seconds==60){
        minutes++;
        seconds=0;
    }
    if(minutes==60){
        hour++;
        minutes=0;
        seconds=0;
    }
    var zeroBeforeHour=hour;
    var zeroBeforeMin=minutes;
    var zeroBeforeSec=seconds;
    var zeroBeforeMill=milliseconds;
    // this variable is used to check if num less than 10 to put 0 before it
    zeroBeforeHour=hour<10?"0"+zeroBeforeHour:hour;
    zeroBeforeMin=minutes<10?"0"+zeroBeforeMin:minutes;
    zeroBeforeSec=seconds<10?"0"+zeroBeforeSec:seconds;
    zeroBeforeMill=milliseconds<10?"0"+zeroBeforeMill:milliseconds;

    document.getElementById("hr").innerHTML=zeroBeforeHour;
    document.getElementById("mn").innerHTML=zeroBeforeMin;
    document.getElementById("sec").innerHTML=zeroBeforeSec;
    document.getElementById("millsec").innerHTML=zeroBeforeMill;
    // setTimout is used to call function after n milliseconds
    setTimeout(stopwatch, 10);
}
