
var zTag = {
	handleSuccess:function(yobj) {
		
	
		if(yobj.responseXML.getElementsByTagName('error').length)
		{
			window.alert(yobj.responseXML.getElementsByTagName('error')[0].firstChild.nodeValue);
		}
		else if(fetch_tags(yobj.responseXML, 'tagcloud')[0])
		{
			var cloud = yobj.responseXML.getElementsByTagName('tagcloud')[0];
			var newcloud = "";
			if(cloud.firstChild != null) {
				newcloud = cloud.firstChild.nodeValue;
			}
			
			fetch_object("ztag_container").innerHTML = newcloud;
		}
		
	},
	
	handleFailure:function(yobj) {
		window.alert("AJAX Error: " + yobj.statusText);
	},
	
	startRequest:function(submitaction) {
		YAHOO.util.Connect.asyncRequest("POST", submitaction, callback);
	}
}

var callback =
{
	success:zTag.handleSuccess,
	failure:zTag.handleFailure,
	scope: zTag,
	timeout: vB_Default_Timeout
}


function ztag_submit(submitaction, querystr, formobj)
{
	
	if(!AJAX_Compatible) {
		return true;
	}
	
	var formObject = document.getElementById("ztagform");
	YAHOO.util.Connect.setForm(formObject);
	formObject.tag.value = "";
	zTag.startRequest(submitaction);	
	return false;
}

function ztag_remove_tag(submitaction, querystr, tag, nexttag)
{
	if(!AJAX_Compatible) {
		return true;
	}
	
	querystr = "&" + querystr;
	YAHOO.util.Connect.asyncRequest('POST', submitaction, callback, SESSIONURL + 'securitytoken=' + SECURITYTOKEN + querystr);
	
	return false;

}

