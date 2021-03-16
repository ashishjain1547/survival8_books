
/**
 * @module components/open-x/ad
 */
if (googletag) {
	// begin DFP tag
	googletag.cmd.push(function() {
		// **** BEGIN adunit setup ****
		// ATF 970x90 Leaderboard - pos1
		googletag.defineSlot("/34363400/HBR_970x90", [[970, 90], [728, 90], [1940, 180], [300, 50], [600, 100]], "DFP_pos1").addService(googletag.pubads()).setTargeting("position", "1").setTargeting("inventory", "ATF");

		// ATF 970x250 Leaderboard - pos1
		googletag.defineSlot("/34363400/HBR_970x250", [[970, 250], [728, 90], [300, 250], [600, 500], [1940, 500]], "DFP_ARTICLE_pos1").addService(googletag.pubads()).setTargeting("position", "1").setTargeting("inventory", "ATF");

		// ATF 300x600 Title - pos2
		googletag.defineSlot("/34363400/HBR_300x600", [[300, 600], [300, 250], [600, 1200], [600, 500]], "DFP_TITLE_pos2").addService(googletag.pubads()).setTargeting("position", "2").setTargeting("inventory", "ATF");

		// BTF 300x600 inContent1+2 - pos3-4
		googletag.defineSlot("/34363400/HBR_300x600", [[300, 600], [300, 250], [600, 1200], [600, 500]], "DFP_IC_pos3").addService(googletag.pubads()).setTargeting("position", "3").setTargeting("inventory", "BTF");
		googletag.defineSlot("/34363400/HBR_300x600", [[300, 600], [300, 250], [600, 1200], [600, 500]], "DFP_IC_pos4").addService(googletag.pubads()).setTargeting("position", "4").setTargeting("inventory", "BTF");

		// BTF 970x250 "feed" - pos5 tabs 1-4
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos5_tab1").addService(googletag.pubads()).setTargeting("position", "5").setTargeting("inventory", "BTF").setTargeting("tab", "1");
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos5_tab2").addService(googletag.pubads()).setTargeting("position", "5").setTargeting("inventory", "BTF").setTargeting("tab", "2");
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos5_tab3").addService(googletag.pubads()).setTargeting("position", "5").setTargeting("inventory", "BTF").setTargeting("tab", "3");
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos5_tab4").addService(googletag.pubads()).setTargeting("position", "5").setTargeting("inventory", "BTF").setTargeting("tab", "4");

		// BTF 970x250 "feed" - pos6 tabs 1-4
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos6_tab1").addService(googletag.pubads()).setTargeting("position", "6").setTargeting("inventory", "BTF").setTargeting("tab", "1");
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos6_tab2").addService(googletag.pubads()).setTargeting("position", "6").setTargeting("inventory", "BTF").setTargeting("tab", "2");
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos6_tab3").addService(googletag.pubads()).setTargeting("position", "6").setTargeting("inventory", "BTF").setTargeting("tab", "3");
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_FEED_pos6_tab4").addService(googletag.pubads()).setTargeting("position", "6").setTargeting("inventory", "BTF").setTargeting("tab", "4");

		// BTF 970x250 inContent1 - pos7
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_IC_pos7").addService(googletag.pubads()).setTargeting("position", "7").setTargeting("inventory", "BTF");
		// BTF 970x250 inContent2 - pos8
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_IC_pos8").addService(googletag.pubads()).setTargeting("position", "8").setTargeting("inventory", "BTF");
		// BTF 970x250 inContent3 - pos9
		googletag.defineSlot("/34363400/HBR_970x250", [[300, 250], [600, 500], [970, 250], [728, 90], [1940, 500]], "DFP_IC_pos9").addService(googletag.pubads()).setTargeting("position", "9").setTargeting("inventory", "BTF");

		// BTF 300x250 Featured Reads - pos10
		googletag.defineSlot("/34363400/HBR_300x250", [[300, 250], [600, 500]], "DFP_FR_pos10").addService(googletag.pubads()).setTargeting("position", "10").setTargeting("inventory", "BTF");

		// BTF 230x230 Partner Centers - pos11-14
		googletag.defineSlot("/34363400/HBR_460x460", [[230, 230], [460, 460]], "DFP_PC_pos11").addService(googletag.pubads()).setTargeting("position", "11").setTargeting("inventory", "BTF");
		googletag.defineSlot("/34363400/HBR_460x460", [[230, 230], [460, 460]], "DFP_PC_pos12").addService(googletag.pubads()).setTargeting("position", "12").setTargeting("inventory", "BTF");
		googletag.defineSlot("/34363400/HBR_460x460", [[230, 230], [460, 460]], "DFP_PC_pos13").addService(googletag.pubads()).setTargeting("position", "13").setTargeting("inventory", "BTF");
		googletag.defineSlot("/34363400/HBR_460x460", [[230, 230], [460, 460]], "DFP_PC_pos14").addService(googletag.pubads()).setTargeting("position", "14").setTargeting("inventory", "BTF");

		googletag.defineSlot("/34363400/HBR_video_pages_300x250", [300, 250], "div-gpt-ad-1445354694736-0").addService(googletag.pubads());
		// **** END adunit setup ****

		// Define Page-level vars
		var DFPIsMobile				= (isMobile()) ? "mobile" : "desktop";
		var DFPAuthor				= obtainParameter("meta[property='article:author']");
		var DFPPageCategoryId		= obtainParameter("meta[name='page-category-id']");
		var DFPPageCategoryName		= obtainParameter("meta[name='page-category-name']");
		var DFPItemId				= obtainParameter("meta[name='item-id']");
		var DFPItemName				= obtainParameter("meta[name='item-name']");
		var DFPPageType				= obtainParameter("meta[name='page-type']");
		var DFPPageId				= obtainParameter("meta[name='page-id']");
		var DFPOxGroup				= obtainParameter("meta[name='ox-group']");
		var DFPArticleType			= obtainParameter("meta[name='article-content-type']");
		var DFPTitle				= obtainParameter("title");
		var DFPType					= obtainParameter("meta[name='og:type']");
		var DFPUrl					= window.location.pathname;

		// Send Page-level key values
		googletag.pubads().setTargeting("layout", DFPIsMobile);
		googletag.pubads().setTargeting("author", DFPAuthor);
		googletag.pubads().setTargeting("cid", DFPPageCategoryId);
		googletag.pubads().setTargeting("category", DFPPageCategoryName);
		googletag.pubads().setTargeting("iid", DFPItemId);
		googletag.pubads().setTargeting("item", DFPItemName);
		googletag.pubads().setTargeting("page-type", DFPPageType);
		googletag.pubads().setTargeting("pid", DFPPageId);
		googletag.pubads().setTargeting("ox-group", DFPOxGroup);
		googletag.pubads().setTargeting("article-type", DFPArticleType);
		googletag.pubads().setTargeting("title", DFPTitle);
		googletag.pubads().setTargeting("type", DFPType);
		googletag.pubads().setTargeting("url", DFPUrl);
		googletag.pubads().setTargeting("dev", "0");

		// Call the ads
		googletag.pubads().collapseEmptyDivs();
		googletag.enableServices();
	});
	// end DFP tag
}

// Return the tag content or an empty string
function obtainParameter (paramName) {
	var paramValue = document.querySelector(paramName);
	if (paramValue) {
		return paramValue.content;
	} else {
		return "";
	}
}

// Returns true if screensize is 'mobile' size and false if it is larger
function isMobile (breakpointWidth) {
	var mobileBreakPoint = 767;
	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var mobileWidth = breakpointWidth || mobileBreakPoint;

	return width <= mobileWidth;
}
