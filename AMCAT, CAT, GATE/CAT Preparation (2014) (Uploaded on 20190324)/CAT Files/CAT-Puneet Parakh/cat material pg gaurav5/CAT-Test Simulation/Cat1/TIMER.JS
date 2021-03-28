function start_timer()
{
parent.frames[1].document.db.s_time.value=get_time();
var time = parseInt(parent.frames[1].document.db.duration.value);
var msecs = time*60000;
setTimeout("end_timer()",msecs);
}

function get_time()
{
var now=new Date();
now= new Date();
hours= now.getHours();
minutes= now.getMinutes(); 
timeStr= "" + hours;
timeStr+= ((minutes < 10) ? ":0" : ":") + minutes;
return timeStr;
};

function end_timer()
{
alert("times's up");
}
