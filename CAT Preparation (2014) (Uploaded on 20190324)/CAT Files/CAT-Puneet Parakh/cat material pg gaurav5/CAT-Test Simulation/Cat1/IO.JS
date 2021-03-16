var questions = parent.frames[1].document.db.questions.value;
var sections =  parseInt(parent.frames[1].document.db.sections.value);
var options =   parseInt(parent.frames[1].document.db.options.value);
var ename ;
var quest_array = new Array(sections);
quest_array = populate_array(questions);
var negative_marks = (parent.frames[1].document.db.negative_marks.value.toLowerCase() == 'true') ? true : false;
var track = 1;

function populate_array(data)
{
var x = new Array(sections);
for ( i = 0; i< sections;i++)
	 x[i] = parseInt(mfetch(data,i+1));
return x;
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

function init()
{
var y_ans = '';
var marks = '';
var flag = true;
var iscore = '';
var icorrect = '';
var iunanswered  = '';
var tscore = '0';
for(j=0;j<sections;j++)
 {
iscore += '0';
icorrect += '0';
iunanswered += quest_array[j];
if ( j!=sections-1 ) 
{
iscore += '#'
iunanswered += '#';
icorrect += '#';
};
for( i=0;i<quest_array[j]; i++)
  {
y_ans += '!'; // this stands for unanswered questions
marks += '0'; // this stands for 0 marks
if (i == quest_array[j] - 1 && j == sections -1) flag = false;
  }; 
if (flag) {
y_ans += '#';
marks += '#';
          }// this stands for delimiter
 } 
parent.frames[1].document.db.y_ans.value = y_ans;
parent.frames[1].document.db.marks.value = marks;
parent.frames[1].document.db.iscore.value = iscore;
parent.frames[1].document.db.tscore.value = tscore;
parent.frames[1].document.db.iunanswered.value = iunanswered;
parent.frames[1].document.db.correct.value = icorrect;
parent.frames[1].document.db.initstatus.value = "false";
if (parent.frames[0].document.forms[0].name == 'section1' ) parent.frames[1].start_timer();
}

function answers(section)
{
var quest_array = new Array(sections);
quest_array  = populate_array(questions);
for ( i = 0; i< quest_array[section-1]; i++)
{
var x = get_oradio(i+1,section);

if( x > 0 || x == 0 ) set_radio(i+1,section,x);
};
}

function fetch(iname,section,no)
{
var start = locate(iname,section-1,'#');
var end = locate(iname,section,'#');
if (section == 1) start = -1;
if (end == -1) end = iname.length;
var tmp = iname.substr(start+1,end - start-1);
return (tmp.charAt(no-1));
};

function locate(iname,section,delim)
{
var i = 0;
var count = 0;
var startx =0;
while (count < section)
{ 
startx = iname.indexOf(delim,i);
i = startx + 1;
count++;
};
return startx;
}



function get_field(question,section,name)
{
var field =  eval("parent.frames[1].document.db." + name );
var tmp = field.value;
tmp = fetch(tmp,section,question);
if (tmp == '!') tmp = '';
return tmp;
}

function insert(iname,section,no,data)
{
var start = locate(iname,section-1,'#');
var end = locate(iname,section,'#');
if (section == 1) start = -1;
if (end == -1) end = iname.length;
var tmp = iname.substr(start+1,end - start-1);
tmp = tmp.substr(0,no-1) + data + tmp.substr(no,(tmp.length - no));
tmp = iname.substr(0,start+1)+ tmp + iname.substr(end,(iname.length - end))
return tmp;
};


function set_field(question,section,data,name)
{
var field =  eval("parent.frames[1].document.db." + name );
field.value = insert(field.value,section,question,data);
}

function get_oradio(question,section)
{
var tmp = parent.frames[1].document.db.y_ans.value;
tmp = fetch(tmp,section,question);
tmp = tmp.charCodeAt(0) - 64;
if (tmp < 0) tmp = -1
return tmp
}

function get_radio(question,section)
{
var flag = true;
var data = eval("parent.frames[0].document.section" + section +".q" + question);
for ( i = 0; i < options,flag; i++)
if(data[i].checked) flag = false ;
return i;
}

function switch_off(question,section,no)
{
var data = eval("parent.frames[0].document.section" + section +".q" + question);
data[no-1].checked = false ;
}

function set_score(section)
{
question  = parseInt(ename.substr(1,ename.length-1));
var x = get_oradio(question,section);
var y = get_radio(question,section);
if ( x == y )
{
 switch_off(question,section,y);
 set_field(question,section,'!',"y_ans");
 set_field(question,section,'0',"marks");
}
else{
tmp = String.fromCharCode(64 + y);
set_field(question,section,tmp,"y_ans");
set_marks(question,section);
}
}

function set_marks(question,section)
{
var x = get_field(question,section,"y_ans");
var y = get_field(question,section,"c_ans");
 if ( x == y) {
set_field(question,section,'1',"marks"); 
}
else{
set_field(question,section,'0',"marks"); 
};
}

function set_radio(question,section,no)
{
var data = eval("parent.frames[0].document.section" + section +".q" + question);
data[no-1].checked = true ;
}


function checkinit(section)
{
if (parent.frames[1].document.db.initstatus.value == "true") init()
else answers(section);
}

function itotal(section,url)
{
var iscore = parent.frames[1].document.db.iscore.value;
var iunanswered = parent.frames[1].document.db.iunanswered.value;
var icorrect = parent.frames[1].document.db.correct.value;
var unanswered = 0;
var minus_marks = 0;
var score = 0;
var correct = 0;
for ( j=0; j<quest_array[section - 1];j++)
   {   
if ( get_field(j+1,section,"marks") == '1' ) {
	score++;
	correct++;
	}
if( get_field(j+1,section,"y_ans")== '') unanswered++;
   }; // end of loop
if (negative_marks) minus_marks = (quest_array[section-1] - score - unanswered)/4;
score =  score - minus_marks;
iscore = replace(iscore,section,score);
var temp_score = iscore.split('#');
var total = 0;
for ( i = 0; i< sections;i++)
 total = parseFloat(temp_score[i]) + total;
icorrect = replace(icorrect,section,correct)
iunanswered = replace(iunanswered,section,unanswered);
parent.frames[1].document.db.iscore.value = iscore;
parent.frames[1].document.db.iunanswered.value = iunanswered;
parent.frames[1].document.db.correct.value = icorrect;
parent.frames[1].document.db.tscore.value = total;
window.location = url; 
};

function timestamp()
{
var tmp;
if (parent.frames[1].document.db.initstatus.value == "true") tmp = get_time()
 else tmp = parent.frames[1].document.db.s_time.value;
return tmp;
}

function ro(section)
{
question = parseInt(ename.substr(1,ename.length-1));
var y = get_radio(question,section);
switch_off(question,section,y);
var x = get_oradio(question,section);
if ( x != -1) set_radio(question,section,x);
};

function replace(iname,pos,data)
{
var start = locate(iname,pos-1,'#');
var end = locate(iname,pos,'#');
var part_a = iname.substr(0,start+1);
if (pos == 1) part_a = '';
var part_b = iname.substr(end,iname.length-end);
if (end == -1 )part_b = '';
var tmp = part_a + data + part_b;
return tmp
};

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

function display(section)
{
question = track;
document.write("<p>");
tmp = "Your Answer : " + get_field(question,section,"y_ans");
write('408080','verdana','-1',tmp);
document.write("<br>");
tmp = "Correct Answer : " + get_field(question,section,"c_ans");
write('FF0000','verdana','-1',tmp,'b');
document.write("<br>");
tmp = "Your Score : " + get_field(question,section,"marks");
write('408080','verdana','-1',tmp,'b');
document.write("<p>");
track = ( track < quest_array[section-1] ) ? (track + 1) : 1;
};

