_satellite.pushAsyncScript(function(event, target, $variables){
  var currentTemplate = _satellite.getVar("templateType");
var templatePathString = sessionStorage.getItem("templatePath") == undefined ? "|" : sessionStorage.getItem("templatePath");
var templatePath = templatePathString.split("|");
var oldTemplate = templatePath[0];
templatePathString = currentTemplate + "|" + oldTemplate;
sessionStorage.setItem("templatePath", templatePathString);
});
