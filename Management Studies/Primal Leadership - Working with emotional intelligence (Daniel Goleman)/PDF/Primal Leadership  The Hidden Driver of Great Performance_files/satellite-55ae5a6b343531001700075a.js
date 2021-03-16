_satellite.pushAsyncScript(function(event, target, $variables){
  var myTemplate = _satellite.getVar('templateType');
var myRules = [['selectorA', 'cmSPA']];
for(var i=0;i<myRules.length; i++){
  sel = myRules[i][0];
  cmSP = myRules[i][1];
  _satellite.cmSp.tagLink(sel, cmSP+myTemplate);
};


var myRules = [['selectorA', 'cmSPA']];
_satellite.cmSp.tagLinks(myRules);
});
