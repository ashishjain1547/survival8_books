var ua,an,ie,mac,win,ns,ns6,ge;
ua=navigator.userAgent;
an=navigator.appName;
ie=ua.indexOf('MSIE')>=0;
mac=ua.indexOf('Mac')>=0;
win=ua.indexOf('Windows')>=0;
unx=ua.indexOf('Unix')>=0;
ns=an.indexOf('Netscape')>=0;
ns6=ua.indexOf('Netscape6')>=0;
ge=ua.indexOf('Gecko')>=0;

function pbopenWindow(x) {
if (pb_target=="_top"){
		if (pb_FitNewWinHeight[x]&&pb_FitNewWinWidth[x]) {
			window.open(pb_URL[x],'NewWin','height='+pb_FitNewWinHeight[x]+',width='+pb_FitNewWinWidth[x]);
		} else {
			top.location=pb_URL[x];
		}
	} else {
		if (pb_FitNewWinHeight[x]&&pb_FitNewWinWidth[x]) {
			window.open(pb_URL[x],'NewWin','height='+pb_FitNewWinHeight[x]+',width='+pb_FitNewWinWidth[x]);
		} else {
			window.open(pb_URL[x]);
	        }
	}
}

function banner_click_pb_DoFSCommand(command, args) {
 if (command == "banner_click_pb")
 {
 pbopenWindow(1);
 }
 else if (command == "banner_click2_pb")
 {
 pbopenWindow(2);
 }
 else if (command == "banner_click3_pb")
 {
 pbopenWindow(3);
 }
 else if (command == "banner_click4_pb")
 {
 pbopenWindow(4);
 }
 else if (command == "banner_click5_pb")
 {
 pbopenWindow(5);
 }
}

if (ie&&win) {
 document.write('<script language=vbscript\>\non error resume next\nSub banner_click_pb_FSCommand(ByVal command, ByVal args)\ncall banner_click_pb_DoFSCommand(command, args)\nend sub</script\>\n');
 document.write('<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id=banner_click_pb width='+pb_width+' height='+pb_height+'><param name=movie value="'+pb_flashfile+'"><param name=quality value=high><param name=wmode value=opaque><param name=loop value=true>');
 document.write('<a href="'+pb_altURL+'" target="'+pb_target+'"><img src="'+pb_altimg+'" width='+pb_width+' height='+pb_height+' border=0></a>');
 document.write('</object>')
} else if (ns && !unx && !ns6 && !ge && navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin && navigator.plugins && navigator.plugins['Shockwave Flash']) {
 document.write('<embed src="'+pb_flashfile+'" name=banner_click_pb swLiveConnect=true width='+pb_width+' height='+pb_height+' quality=high wmode=opaque loop=true type="application/x-shockwave-flash"><noembed><a href="'+pb_altURL+'" target="'+pb_target+'"><img src="'+pb_altimg+'" width='+pb_width+' height='+pb_height+' border=0></a></noembed></embed>');
} else {
 document.write('<a href="'+pb_altURL+'" target="'+pb_target+'"><img src="'+pb_altimg+'" width='+pb_width+' height='+pb_height+' border=0></a>');
}
