_satellite.pushBlockingScript(function(event, target, $variables){
  //Bulk Pricing
var bulkPricing = jQuery('[data-body-selector="#bulk-pricing-info-books"]');
bulkPricing.map(
  function(){
    var oldHref = this.href.split('#');
    var newHref = oldHref + '&cm_sp=IDP/Product/SKU_Links_Bulk Pricing#';
    this.href = newHref;
  }
);

//Comment Section 
$('div.article-tools a[href="#comment-section"]')[0].href=document.location.pathname+"?cm_sp=Article-_-Links-_-Comment#comment-section";

//Article Tools - Text Size
$('div.article-tools a[js-target="text-size"]')[0].href=document.location.pathname+'?cm_sp=Article-_-Links-_-Text%20Size';

// Buy PDF
if ($('div.article-tools a[js-target="buy-reprint-link"]').length > 0) {
	var prodHref = jQuery('div.article-tools a[js-target="buy-reprint-link"]')[0].href;
  $('div.article-tools a[js-target="buy-reprint-link"]')[0].href=prodHref+'?cm_sp=Article-_-Links-_-Buy%20PDF';
}

//Partner Module
var i, items=$('div.component[data-params="region=openx;location=partner-center"] a[href^="https://ox-d.hbr.org"]');
for (i=0; i<items.length; i++) {
	items[i].href+='&cm_sp=Article-_-Modules-_-Partner%20Center';
}

//Popular Topics
var i, items=$('div.ptm:contains("Related Topics") a[href^="/topic"]');
for (i=0; i<items.length; i++) {
	items[i].href+='?cm_sp=Article-_-Modules-_-Associated%20Topics';
}

var i, items=$('div.promo--right:contains("View more from the") div.promo-contents a[href^="/"]')
for (i=0; i<items.length; i++) {
	items[i].href+="?cm_sp=Article-_-Links-_-Magazine%20Issue";
}

//Download PDF
// Client wants to disable for now
//var i, items=$('a i.icon-download-pdf');
//if (items.length > 0 ){
//	var anchor=items[0].parentNode;

//  var parser = document.createElement('a');
//  parser.href=anchor.href;
// var anchorHref = parser.protocol+"//"+parser.hostname+parser.pathname;
	//anchor.href=anchorHref+"?cm_sp=Article-_-Links-_-Download";

//}
// Print Article
//var oldHref=$('div.article-tools a[js-target="print-article"]')[0].href;
//$('div.article-tools a[js-target="print-article"]')[0].href=document.location.pathname+'?cm_sp=Article-_-Links-_-Print';
//$('div.article-tools a[js-target="print-article"]')[0].click(function(){window.print();});
});
