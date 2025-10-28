var isStop=true;
var min=0;
var sec=0;
var hr=0;

function start()
{
    if(isStop==true)
    {
        isStop=false;
        time();
    }
}
function time()
{
    if(isStop==false)
    {
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
        if(min==60)
        {
            min=0;
            hr++;
        }
        if(sec<10)
        {
            sec="0"+sec;
        }
        if(min<10)
        {
            min="0"+min;
        }
        if(hr<10)
        {
            hr="0"+hr;
        }
        stopwatch.innerHTML=hr + " : " + min + " : " + sec;
        setTimeout("time()",1000);
    }
}
function stop()
{
    isStop=true;
}
function reset()
{
    isStop=true;
    sec=0;
    min=0;
    hr=0;
    stopwatch.innerHTML="00 : 00 : 00"
}