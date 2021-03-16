_satellite.pushAsyncScript(function(event, target, $variables){
  var templateType = _satellite.getVar("templateType");
$('[track-target="global-nav-link--the-latest"]')[0].href+="?cm_sp=Left%20Navigation-_-The%20Latest-_-"+templateType;
$('[track-target="global-nav-link--most-popular"]')[0].href+="?cm_sp=Left%20Navigation-_-Most%20Popular-_-"+templateType;
$('[track-target="global-nav-link--topics"]')[0].href+="?cm_sp=Left%20Navigation-_-All%20Topics-_-"+templateType;
$('[track-target="global-nav-link--video"]')[0].href+="?cm_sp=Left%20Navigation-_-Video-_-"+templateType;
$('[track-target="global-nav-link--magazine"]')[0].href+="?cm_sp=Left%20Navigation-_-The%20Magazine-_-"+templateType;
$('[track-target="global-nav-link--store"]')[0].href+="?cm_sp=Left%20Navigation-_-HBR%20Store-_-"+templateType;
$('[track-target="global-nav-link--my-library"]')[0].href+="?cm_sp=Left%20Navigation-_-My%20Library-_-"+templateType;
$('[track-target="global-nav-link--visual-library"]')[0].href+="?cm_sp=Left%20Navigation-_-Visual%20Library-_-"+templateType;

});
