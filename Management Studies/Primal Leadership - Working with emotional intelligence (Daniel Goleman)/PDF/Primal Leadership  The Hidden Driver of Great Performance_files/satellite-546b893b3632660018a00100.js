_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.notify("CoreMetrics\tPage View Tag\tSTARTING", 1);
_satellite.notify("CoreMetrics\tCM Client ID\t"+cm_ClientID, 1);
var pageID = _satellite.getVar('pageID');
var cmCategoryID=_satellite.getVar('cmCategoryID');
var cmAttributeString=_satellite.getVar("attributeString-cmPageView");

cmCreatePageviewTag(pageID, cmCategoryID, null, null, cmAttributeString);
//_satellite.notify("attributeString-cmPageView is "+cmAttributeString,1);


//Stew Added
if (localStorage.user) {
    var templateType = _satellite.getVar("templateType");
    var pageID = _satellite.getVar("pageID");
    var cmString = templateType + "-_-" + pageID;
    var userID = _satellite.getVar('userID');
		var userEmail = _satellite.getVar('userEmail');  
  
	if (sessionStorage.logInStatus) {
		if (sessionStorage.logInStatus === "explicitStart") {
			_satellite.notify("LOGIN EXPLICIT : Complete", 1);
			sessionStorage.setItem("logInStatus", "loggedIn");
			cmCreateElementTag("LOG IN:EXPLICIT:FINISH","LOG IN",cmString);	
      cmCreateRegistrationTag(userID,userEmail,null,null,null,null,_satellite.getVar('attributeString-registration'));
		} else {
			_satellite.notify("loggedIn - NO OP", 1);
		}
	} else {
		_satellite.notify("LOGIN IMPLICIT", 1);
		sessionStorage.setItem("logInStatus", "loggedIn");
		cmCreateElementTag("LOG IN:IMPLICIT","LOG IN",cmString);
    cmCreateRegistrationTag(userID,userEmail,null,null,null,null,_satellite.getVar('attributeString-registration'));
	}  
};
_satellite.notify("CoreMetrics\tCM Client ID\t"+cm_ClientID, 1);
//else {
	//_satellite.notify("LOGGED OUT", 1)
	//sessionStorage.removeItem("logInStatus");
//};
_satellite.notify("CoreMetrics\tPage View Tag\tCOMPLETE", 1);

});
