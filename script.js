var sessionTime=document.getElementById("st");
var breakTime = document.getElementById("bt");
var time = 1;
var time1 = 5;
var sec = 0;
var t;
breakTime.innerHTML = time1+" min";
sessionTime.innerHTML= time+" min";
var timer = document.getElementById("time");
timer.innerHTML=checkMinute(time)+":"+checkSeconds(sec);

var btimer = document.getElementById("btime");
btimer.innerHTML=checkMinute(time1)+":"+checkSeconds(sec);


var pause = document.getElementById("pause");
var start = document.getElementById("start");
var resume = document.getElementById("resume");
var reset  = document.getElementById("reset");

// pause.style.display="none";
// resume.style.display="none";

start.addEventListener("click",function(){
    start.style.display="none";
    pause.style.display="block";
    startTime();
});
function startBreak()
{
    var timeArray=btimer.innerHTML.split(/[:]/);
    var min=parseInt(timeArray[0]);
    var sec=parseInt(timeArray[1]);
    btimer.style.display="block";
    timer.style.display="none";
    if(min==00 && sec==00)
    {
        clearTimeout(t);
        alert("Break Over.You can start your session again!");
        window.location.reload();
        return;
    }
    else if(sec==0)
    {
        sec=59;
        min=min-1;
    }
    else sec--;
    btimer.innerHTML=checkMinute(min)+":"+checkSeconds(sec);
     t=setTimeout(startBreak,100);
}
function startTime()
{
    var timeArray=timer.innerHTML.split(/[:]/);
    sec=parseInt(timeArray[1]);
    var min = parseInt(timeArray[0]);
    if(min==0&&sec==0){
         startBreak();
         return;
    }
    else if(sec==0)
    {
        sec=59;
        min--;
    }
    else sec--;
    timer.innerHTML=checkMinute(min)+":"+checkSeconds(sec);
    t = setTimeout(startTime,100);
}

function checkMinute(min){if(min<10) min="0"+min;return min;}	
function checkSeconds(s){
    var sec=parseInt(s);
    if (sec < 10 && sec >= 0) 
    sec = "0" + sec;
    return sec;
}    
pause.addEventListener("click",function(){
    resume.style.display="block";
    pause.style.display="none";
    clearTimeout(t);
});

resume.addEventListener("click",function(){
    resume.style.display="none";
    pause.style.display="block";
    startTime();
});

reset.addEventListener("click",function(){
    pause.style.display="none";
    resume.style.display="none";
    start.style.display="block";
    window.location.reload();
});






// Session time increase
var splus = document.getElementById("plus");
splus.addEventListener("click",function(){
    time++;
    sessionTime.innerHTML= time+" min";
    timer.innerHTML = time+":0"+sec;
});
// session time decrease
var sminus = document.getElementById("minus");
sminus.addEventListener("click",function(){
    if(time!=1) time--;
    sessionTime.innerHTML= time+" min";
    timer.innerHTML = time+":0"+sec;
});
//  break time increase
var bplus = document.getElementById("plus1");
bplus.addEventListener("click",function(){
    time1++;
    breakTime.innerHTML= time1+" min";
});
// break time decrease
var bminus = document.getElementById("minus1");
bminus.addEventListener("click",function(){
    if(time1!=1) time1--;
    breakTime.innerHTML= time1+" min";
});
