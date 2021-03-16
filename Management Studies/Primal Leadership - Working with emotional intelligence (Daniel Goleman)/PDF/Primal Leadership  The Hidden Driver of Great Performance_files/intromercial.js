/* jshint unused:false */

// Lifted from Modernizr
// Determines which transition end event to listen for (which is browser-based) by creating a fake element and checking for its transitions.
function whichTransitionEndEvent() {
	var t;
	var el = document.createElement("fakeelement");
	var transitions = {
		transition: "transitionend",
		OTransition: "oTransitionEnd",
		MozTransition: "transitionend",
		WebkitTransition: "webkitTransitionEnd"
	};

	for (t in transitions) {
		if (el.style[t] !== undefined) {
			return transitions[t];
		}
	}
}

function isMobile(breakpointWidth) {
	var mobileBreakPoint = 767;
	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var mobileWidth = breakpointWidth || mobileBreakPoint;
	return width <= mobileWidth;
}

function readCookie(name) {
	var nameEq = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEq) === 0) {
			return c.substring(nameEq.length, c.length);
		}
	}
	return null;
}

function createCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; domain=hbr.org; path=/";
}

function dismissIntromercial() {
	var introElement = document.getElementById("intromercial-handle");
	var transitionEvent = whichTransitionEndEvent();
	var triggeredFunction = function() {
		introElement.removeEventListener(transitionEvent, triggeredFunction);
		introElement.style.display = "none";
		document.getElementsByTagName("body")[0].style.overflow = "auto";
	};
	introElement.addEventListener(transitionEvent, triggeredFunction);
	introElement.style.opacity = 0;
	if (transitionEvent === undefined) {
		setTimeout(triggeredFunction, 100);
	}
}

function showIntromercial() {
	// console.log("Showing Intromercial");
	var intromercialPartOne = "<section" +
		" id=\"intromercial-handle\" class=\"backdrop-darker window-block\" onClick=\"javascript:dismissIntromercial();\">" +
		"	<div class=\"intromercial-container\">" +
		"		<div class=\"row collapse intromercial-header\">" +
		"			<div class=\"small-5 column\">" +
		"				<img src=\"/resources/css/images/hbr_logo_shield_white.svg\" alt=\"Harvard Business Review\" class=\"logo\"/>" +
		"			</div>" +
		"			<div class=\"small-7 column skip-container\">" +
		"				<a title=\"Close\" href=\"javascript:dismissIntromercial();\">Go to HBR.org <i class=\"icon icon-caret-right\"></i></a>" +
		"			</div>" +
		"		</div>" +
		"		<div>" +
		"			<div class=\"intromercial-close\" onClick=\"javascript:dismissIntromercial();\"></div>" +
		"			<iframe class=\"intromercial-iframe\" style=\"overflow:hidden;\" scrolling=\"no\" frameborder=\"0\" src=\"";
	var intromercialPartTwo = "\"></iframe>" +
		"		</div>" +
		"	</div>" +
		"</section>";

	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	var htmlUrl = isMobile() ? "/resources/html/marketing/intromercial/overlay.mobile.html" : "/resources/html/marketing/intromercial/overlay.html";
	/* jshint evil:true */
	document.write(intromercialPartOne + htmlUrl + intromercialPartTwo);
	/* jshint evil:false */
	setTimeout(dismissIntromercial, 30 * 1000);
	createCookie("marketing_interruption", "overlay", 0.5);
}

function showIPerceptions() {
	// console.log("Showing iPerceptions");
	var js,
	fjs = document.getElementsByTagName("script")[0],
	id = "IPerceptionsJS";
	if (document.getElementById(id)) { return; }
	js = document.createElement("script");
	js.src = window.location.protocol +
		"//ips-invite.iperceptions.com/webValidator.aspx" +
		"?sdfc=deb1a23c-108750-00f659ce-140e-2a3f-21df-ba8128fc6d3a&lID=1&loc=STUDY&cD=90&rF=False&iType=1&domainname=1";
	js.id = id;
	fjs.parentNode.insertBefore(js, fjs);
}

function displayPopup() {
	var miRandom = Math.floor((100 * Math.random()) + 1);
	// console.log(miRandom);
	switch (true) {
		// 85% gets intromercial
		case ((1 <= miRandom) && (miRandom <= 84)):
			showIntromercial();
			break;
		// 15% gets iPerceptions
		case ((85 <= miRandom) && (miRandom <= 100)):
			showIPerceptions();
			break;
	}
}

//generateIntromercial is the function called directly from primary-template.ftl
window.generateIntromercial = function() {

	// this is true, then it will show intromercial
	var notAProtectedPage = (
		(document.location.href.indexOf("cm_mmc=email-_-rtb") === -1) &&
		(document.location.href.indexOf("cm_mmc=email-_-so") === -1) &&
		(document.location.href.indexOf("cm_mmc=cpc") === -1) &&
		(document.location.href.indexOf("hideIntromercial=true") === -1)
	);

	// is this meta tag present?
	// <meta name="intromercial" content="protected">
	// https://github.com/HBRGTech/hbr-resources/pull/555
	var meta = document.querySelector("meta[name='intromercial']");
	if ((!(meta && meta.content === "protected")) && notAProtectedPage) {
		// console.log("No meta tag found");
		var checkcookie = readCookie("marketing_interruption");
		// is cookie present?
		// console.log("Is the cookie present?: " + checkcookie);
		if (!(checkcookie)) {
			displayPopup();
		}
	}
};
