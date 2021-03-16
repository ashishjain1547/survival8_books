function show(iname,pos)
{
var start = locate(iname,pos-1,'#');
var end = locate(iname,pos,'#');
if (pos == 1) start = -1;
if (end == -1) end = iname.length;
var tmp = iname.substr(start+1,end - start-1);
return tmp;
};

function fetch(iname,section,no)
{
var start = locate(iname,section-1,'#');
var end = locate(iname,section,'#');
if (section == 1) start = -1;
if (end == -1) end = iname.length;
var tmp = iname.substr(start+1,end - start-1);
return (tmp.charAt(no-1));
};

function mfetch(iname,section)
{
var start = locate(iname,section-1,'#');
var end = locate(iname,section,'#');
if (section == 1) start = -1;
if (end == -1) end = iname.length;
var tmp = iname.substr(start+1,end - start-1);
return (tmp);
}

function locate(iname,pos,delim)
{
var i = 0;
var count = 0;
var startx =0;
while (count < pos)
{ 
startx = iname.indexOf(delim,i);
i = startx + 1;
count++;
};
return startx;
}


function write(color,face,size,text,style)
{
tmp1 = '<'+style+'>';
tmp2 = '</'+style+'>';
if (write.arguments.length == 4)tmp1 = tmp2 = '';
x =tmp1 + '<font face="' + face + '" color="#'+ color + '" size="' + size +'">' + text + '</font>' + tmp2;
document.write(x);              
}

function displayscores(section)
{
var iter = section;
var gtotal = "";
var noq = '';
if (displayscores.arguments.length == 0) 
{
iter = parseInt(parent.frames[1].document.db.sections.value);
gtotal = "<p>Cumulative scores for all " + parent.frames[1].document.db.sections.value + " Sections = " +  parent.frames[1].document.db.tscore.value;
};

for ( i =0 ; i<iter;i++)
{
sectio = i+1;
noq = mfetch(parent.frames[1].document.db.questions.value,sectio);
document.write("<p>");
tmp = "Total No of questions in Section"+sectio+": = " + noq ;
write('408080','verdana','-1',tmp,'b');
document.write("<br>");
tmp = "No of correctly answered questions in Section"+sectio+": = " + show(parent.frames[1].document.db.correct.value,sectio);
write('408080','verdana','-1',tmp,'b');
document.write("<br>");
tmp = "No of unattempted questions in Section"+sectio+": = " + show(parent.frames[1].document.db.iunanswered.value,sectio);
write('408080','verdana','-1',tmp,'b');
document.write("<br>");
tmp = "Total Score in Section"+sectio+": = " + show(parent.frames[1].document.db.iscore.value,sectio);
write('408080','verdana','-1',tmp,'b');
document.write("<br>");
document.write("<hr>");
};
write('408080','verdana','-1',gtotal,'b');
};

