

function myresponsefunction(){
document.getElementById('mypopup').innerHTML=AJAX.handler.responseText;

fireMyPopup2();
}

function myresponsefunction2(vbstatus_div){
if(AJAX.handler.readyState==4){
document.getElementById(AJAX.testdiv).innerHTML=AJAX.handler.responseText;
}
document.getElementById('mypopup').innerHTML = '';

}
function fireMyPopup2() {
<!-- Due to different browser naming of certain key global variables, we need to do three different tests to determine their values -->

// Determine how much the visitor had scrolled

var scrolledX, scrolledY;
if( self.pageYOffset ) {
  scrolledX = self.pageXOffset;
  scrolledY = self.pageYOffset;
} else if( document.documentElement && document.documentElement.scrollTop ) {
  scrolledX = document.documentElement.scrollLeft;
  scrolledY = document.documentElement.scrollTop;
} else if( document.body ) {
  scrolledX = document.body.scrollLeft;
  scrolledY = document.body.scrollTop;
}

// Determine the coordinates of the center of browser's window

var centerX, centerY;
if( self.innerHeight ) {
  centerX = self.innerWidth;
  centerY = self.innerHeight;
} else if( document.documentElement && document.documentElement.clientHeight ) {
  centerX = document.documentElement.clientWidth;
  centerY = document.documentElement.clientHeight;
} else if( document.body ) {
  centerX = document.body.clientWidth;
  centerY = document.body.clientHeight;
}

  var leftOffset = scrolledX + (centerX - 250) / 2;
  var topOffset = scrolledY + (centerY - 200) / 2;

  document.getElementById("mypopup").style.top = topOffset + "px";
  document.getElementById("mypopup").style.left = leftOffset + "px";
  document.getElementById("mypopup").style.display = "block";


} 

function Att_Ajax(varstring,url)
{
 AJAX = new _ajax(true)
 AJAX.onreadystatechange(myresponsefunction)
 AJAX.send(varstring, 'GET', url)
}
function Att_AjaxDiv(varstring,url,testdiv)
{
 AJAX = new _ajax(true)
AJAX.testdiv = testdiv;
 AJAX.onreadystatechange(myresponsefunction2)
 AJAX.send(varstring, 'GET', url)
}

function Att_AjaxForm(varstring,url)
{
 AJAX = new _ajax(true)
 AJAX.onreadystatechange(myresponsefunction)
 AJAX.send(varstring, 'POST', url)
}