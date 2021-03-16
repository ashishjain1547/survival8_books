_satellite.pushBlockingScript(function(event, target, $variables){
  if(!_satellite.cmSp){
  _satellite.cmSp = new Object();
  _satellite.cmSp.tagLink = function(jquerySelector, linkTag){
    var linkItems = jQuery(jquerySelector);
    if(linkItems.length===0){
      _satellite.notify('cm_sp\tNo links for selector:\t'+jquerySelector, 1);
    } else {
      for(var i=0; i<linkItems.length; i++){
        linkItem = items[i];
        if(linkItem.href) {
          linkItem.href += linkTag;
        } else {
        _satellite.notify('cm_sp\tNo href for selector\t'+jquerySelector, 1);
        };
      };
    };
  };
  _satellite.cmSp.tagLinks = function(linkTags){
    if(jQuery.isArray(linkTags)){
      for(var j=0; j<linkTags.length; j++){
        linkTag = linkTags[j];
        if(linkTag.length === 2){
          _satellite.cmSp.tagLink(linkTag[0], linkTag[1]);
        };
      };
    } else {
      _satellite.notify('cm_sp\tRequires array of linkTags', 1);
    };
  };
};
});
