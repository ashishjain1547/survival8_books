_satellite.pushBlockingScript(function(event, target, $variables){
  function AdLoader() {}

AdLoader.prototype = {
 /**
	* function that will initialize the object
	*
	* @param {slots} The slots defined in the google ad call
	*
	*/
  init: function(slots) {
		this.excludedSlotsId=  ["DFP_pos1","DFP_ARTICLE_pos1","div-gpt-ad-1459426305681-0"];
		this.excludedSlots = [];
    this.excludedSlotDisplayable = [true,true,false];
    this.adSlots = this.saveSlots(slots);    
		this.debug = false;
		//Current window displayable height
		this.windowViewPortHeight = $(window).height();
	},
 /**
	* function that save the slots into an instance variable for optimizing ad load
	*
	* @param {slots} The slots defined in the google ad call
	*
	*/
	saveSlots: function(slots) {
		var mySlots = [];
		for (var x = 0; x < slots.length; x++) {
			var add = true;
			for(var y=0; y < this.excludedSlotsId.length; y++) {
				if(slots[x].getSlotElementId() == this.excludedSlotsId[y]) {
					this.excludedSlots[y] = slots[x];
          this.excludedSlots[y].displayable = this.excludedSlotDisplayable[y];
					add = false;
          break;
				}
			}
			if(add) {
				mySlots[slots[x].getSlotElementId()] = slots[x];
			}
		}
		return mySlots;
	},
/**
	* function that start the process of locating the ad and attaching the listener
	*
	*/
	start: function() {
		$(window).load(this.initAdSlots.bind(this)); //Run to get the actual ad position
		$(window).load(this.handleScrollListener.bind(this)); //Run once only for startup
    this.attachScrollListener(); //Attach listener to start tracking view port
	},
/**
	* function that Attach listener to element. When element change check for ad coming into view.
	*/
	addViewChangedListener: function() {
			$(".tab-bar--tab").on("click", function(e) {
				setTimeout("window.myAdLoader.viewChanged()",500);
			});
	},
/**
	* function that will find all the ad position and check if they need to be render
	*/
	viewChanged: function() {		
		this.findAllAdPositions();
		this.handleScrollListener();
	},
  /**
	* function that will render all ads after 25 seconds
	*/
	addRunAllAds: function() {
	  setTimeout("window.myAdLoader.runAllAds()",25*1000);
	},
/**
	* function that will find render all ad poitions
	*/
	runAllAds: function() {
		for (var key in this.adSlots) {
			if(this.adSlots[key].adRefreshState === false) {
				this.displayAd(this.adSlots[key]);
				this.adSlots[key].adRefreshState = true;
			}
		}
	},
	runExcludedAds: function() {
		for (var key in this.excludedSlots) {		
			 if(this.excludedSlots[key].displayable) {
				  this.displayAd(this.excludedSlots[key]);			
				}		
		}
	},  
/**
	* function that set the ad position and refresh state
	*/
	initAdSlots: function() {
		for (var key in this.adSlots) {
			var e = this.adSlots[key].getSlotElementId();
			if (!document.getElementById(e)) {
				delete this.adSlots[key];
			} else {
				this.adSlots[key].adRefreshState = false;
				this.adSlots[key].adPosition = this.findAdPosition(this.adSlots[key].getSlotElementId());
				//if (this.debug) { console.log("initAdSlots " + key + " position is " + this.adSlots[key].adPosition); }
			}
		}
	},
/**
	* function that find the exact position of ad relative to the top element.
	* @param {id} The element id of the ad
	*/
	getTopPositionForSlot: function(id) {
		var e = document.getElementById(id);
		var top = $(e).offset().top;
		return top;
	},
/**
	* function that handle the scrolling event
	*/
	handleScrollListener: function() {
		var y1 = $(document).scrollTop();
		var y2 = this.windowViewPortHeight;
		var viewPort = y1 + y2;
		var hasRefreshLeft = false;
		//if (this.debug) { console.log("View area is between" + y1 + " and " + viewPort); }
		for (var key in this.adSlots) {
			if ((this.adSlots[key].adPosition < viewPort) && (this.adSlots[key].adPosition > y1) && (this.adSlots[key].adRefreshState === false)) {
				if ($("#" + this.adSlots[key].getSlotElementId()).is(":visible")) {
					this.displayAd(this.adSlots[key]);
					this.adSlots[key].adRefreshState = true;
				}
			}
			if (this.adSlots[key].adRefreshState === false) {
				hasRefreshLeft = true;
			}
		}
		if (hasRefreshLeft === false) {
			this.removeScrollListener();
		}
	},
/**
	* function that attach scroll listener
	*/
	attachScrollListener: function() {
		$(window).on("scroll.ad",
		  this.handleScrollListener.bind(this)
		);
	},
/**
	* function that remove scroll listener
	*/
	removeScrollListener: function() {
		//if (this.debug) { console.log("i removed scroll listener."); }
		$(window).off("scroll.ad");
	},
/**
	* function that find ad position
	*  @param {element} The element id
	*/
	findAdPosition: function (element) {
		return this.getTopPositionForSlot(element);
	},
/**
	* function that find all ad positions
	*/
  findAllAdPositions: function() {
		for (var key in this.adSlots) {
			if (this.adSlots[key].adRefreshState !== undefined && this.adSlots[key].adRefreshState === false) {
				this.adSlots[key].adPosition = this.findAdPosition(this.adSlots[key].getSlotElementId());
				//if (this.debug) { console.log("findAllAdPositions " + key + " position is " + this.adSlots[key].adPosition); }
			}
		}
	},
/**
	* function that display the ad
	*/
	displayAd: function(adId) {
		//console.log("display ad " + adId.getSlotElementId());
		googletag.cmd.push(function() {     
			googletag.pubads().refresh([adId],{changeCorrelator: false});
			window.myAdLoader.findAllAdPositions();
		});
	}
};

/*
if (googletag) {
	window.myAdLoader = new AdLoader();
	googletag.cmd.push(function() {
		window.myAdLoader.init(googletag.pubads().getSlots());
		window.myAdLoader.start();
		window.myAdLoader.addViewChangedListener();
    window.myAdLoader.addRunAllAds();
	});
}
*/
startAd = function() {		
  googletag.pubads().updateCorrelator();
  window.myAdLoader.initAdSlots(); 
  window.myAdLoader.handleScrollListener();
  window.myAdLoader.attachScrollListener();
	window.myAdLoader.addViewChangedListener();
  window.myAdLoader.addRunAllAds();
}

intromercialIsShowing = function() {
  var introElement = document.getElementById("intromercial-handle");
  if(introElement) {   
    return true;
  } 
  return false;
}

addShowAdToTransition = function() {
	var introElement = document.getElementById("intromercial-handle");
	var transitionEvent = whichTransitionEndEvent();	
	if(introElement) {    
	  introElement.addEventListener(transitionEvent, startAd);
	}
}

$(window).load(function() {
  window.myAdLoader = new AdLoader();
  window.myAdLoader.init(googletag.pubads().getSlots());  
  window.myAdLoader.runExcludedAds();
  if(intromercialIsShowing()) {
    addShowAdToTransition();
  }
	else {
    window.myAdLoader.initAdSlots();
    window.myAdLoader.handleScrollListener();
		window.myAdLoader.attachScrollListener();
		window.myAdLoader.addViewChangedListener();
    window.myAdLoader.addRunAllAds();
	}
});
});
