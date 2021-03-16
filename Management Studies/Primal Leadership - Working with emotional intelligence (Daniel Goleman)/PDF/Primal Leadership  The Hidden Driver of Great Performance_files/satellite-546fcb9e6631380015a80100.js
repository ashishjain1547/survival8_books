_satellite.pushAsyncScript(function(event, target, $variables){
  var templateType=_satellite.getVar("templateType");
if($('nav.global-nav ul')[0]!=undefined){
$('nav.global-nav ul.nav-items-top li a[href="/the-latest"]')[0].href+="?cm_sp=Left%20Navigation-_-The%20Latest-_-"+templateType;
$('nav.global-nav ul.nav-items-top li a[href="/most-popular"]')[0].href+="?cm_sp=Left%20Navigation-_-Most%20Popular-_-"+templateType;
$('nav.global-nav ul.nav-items-top li a[href="/big-ideas"]')[0].href+="?cm_sp=Left%20Navigation-_-Big%20Ideas-_-"+templateType;
$('nav.global-nav ul.nav-items-top li a[href="/topics"]')[0].href+="?cm_sp=Left%20Navigation-_-All%20Topics-_-"+templateType;
$('nav.global-nav ul.nav-items li a[href="/magazine"]')[0].href+="?cm_sp=Left%20Navigation-_-The%20Magazine-_-"+templateType;
$('nav.global-nav ul.nav-items li a[href="/store"]')[0].href+="?cm_sp=Left%20Navigation-_-HBR%20Store-_-"+templateType;
$('nav.global-nav div.registered-nav ul.nav-my-hbr-items li a[href="/my-library/settings"]')[0].href+="?cm_sp=Left%20Navigation-_-Account%20Settings-_-"+templateType;
$('nav.global-nav div.registered-nav ul.nav-my-hbr-items li a[href="/my-library/history"]')[0].href+="?cm_sp=Left%20Navigation-_-History-_-"+templateType;
// $('nav.global-nav div.registered-nav ul.nav-my-hbr-items li a[href="/my-library/saves"]')[0].href+="?cm_sp=Left%20Navigation-_-My%20Saves-_-"+templateType;
$('nav.global-nav div.registered-nav ul.nav-my-hbr-items li a[href="/my-library/following"]')[0].href+="?cm_sp=Left%20Navigation-_-My%20Topics-_-"+templateType;
$('nav.global-nav div.registered-nav ul.nav-my-hbr-items li a[href="/my-library/recommended"]')[0].href+="?cm_sp=Left%20Navigation-_-Recommended-_-"+templateType;
$('nav.global-nav div.registered-nav a[href="/logout"]')[0].href+="?cm_sp=Left%20Navigation-_-Sign%20Out-_-"+templateType;
$('nav.global-nav div.registered-nav div.nav-my-hbr a[href="/my-library"]')[0].href+="?cm_sp=Left%20Navigation-_-My%20Library-_-"+templateType;
$('nav.global-nav div.guest-nav a[href="/register"]')[0].href+="?cm_sp=Left%20Navigation-_-Register-_-"+templateType;
// $('span.subscribe-now a[href="/register"]')[0].href+="?cm_sp=Topbar-_-Register-_-"+templateType;
}
});
