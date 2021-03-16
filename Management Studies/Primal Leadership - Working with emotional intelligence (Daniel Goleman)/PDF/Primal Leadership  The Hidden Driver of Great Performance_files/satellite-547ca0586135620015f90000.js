_satellite.pushAsyncScript(function(event, target, $variables){
  //Top Circulator
var i, items=$('aside.sidebar--circulator ul li a[href^="http://recs.richrelevance.com"]');
for (i=0; i<items.length; i++) {
	items[i].href+='%3Fcm_sp%3DArticle-_-Links-_-Top%20of%20Page%20Recirculation';
}
});
