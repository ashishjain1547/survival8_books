_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.setCookie("pagePath", "");
//var pagePath = sessionStorage.getItem("pagePath") == undefined ? [] : sessionStorage.getItem("pagePath").split("|");
//var pageID = _satellite.getVar("pageID");
//pagePath.push(pageID);
//sessionStorage.setItem("pagePath", pagePath.join("|"));
var pagePathString = sessionStorage.getItem('pagePath') || "|";
var pagePath = pagePathString.split("|");
var oldPage = pagePath[0];
var newPage = document.URL;
pagePath[0] = newPage;
pagePath[1] = oldPage;
pagePathString = pagePath.join("|");
sessionStorage.setItem('pagePath', pagePathString);
});
