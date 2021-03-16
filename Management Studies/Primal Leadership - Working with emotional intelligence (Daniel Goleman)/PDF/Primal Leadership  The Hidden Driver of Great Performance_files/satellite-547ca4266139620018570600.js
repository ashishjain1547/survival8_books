_satellite.pushAsyncScript(function(event, target, $variables){
  //Bottom Circulator
var i, items=$('personalization-placement.personalization-placement[data-placement-id="bottom"] a[href^="http://recs.richrelevance.com"]');
for (i=0; i<items.length; i++) {
	items[i].href+='%26cm_sp%3DArticle-_-Links-_-End%20of%20Page%20Recirculation';
}
});
