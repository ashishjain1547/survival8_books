function statusoff(targeturl){
aeropopmaker = 
open(targeturl,'','status=yes,menubar=no,scrollbars=yes,resizable=yes,width=768,height=500,left=0,top=0');
}
function status(targeturl){
aeropopmaker = 
open(targeturl,'','status=no,menubar=no,scrollbars=no,resizable=no,width=488,height=380,left=150,top=125');
}

function op3(targeturl)
  {
aeropopmaker = open(targeturl,"","width=660,height=150,scrollbars=yes,resizable=yes,menubar=no,left=70,top=200");
  }

  if (navigator.appName == "Microsoft Internet Explorer") {
     function click() {
     if (event.button==2) {
     alert('Sorry No Right Click Is Available Here.');
     }
     }   
     document.onmousedown=click
        
     function press() {
 if(event.keyCode==116||event.keyCode==93||event.keyCode==17||event.keyCode==18)
		 {
     alert('Sorry this function is disabled.');
     }
     }   
     document.onkeydown=press
      }
