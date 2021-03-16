//var gmScriptName = 'tagr_lib_dfa_in_v2.js';
// Turbine code

function gmtagr()
{
    // set core tagr variables
	this.gmScriptName = 'tagr_lib_dfa_in_v2.js'; // This parameter needs to match the name of the JS file *as saved to the CDN*
	this.trackingDomain = 'in-gmtdmp.mookie1.com'; // Use the tracking domain from the TAGr tag generated in the UI
    this.acid = 16; // Use the account ID (acid) from the tag generated in the UI => will be set in tagr meta data
    this.inst = 'NA'; // Use the instance (inst) from the tag generated in the UI => will be set in tagr meta data
    this.tagid = 'V2_60356'; // Use the tag id from the tag generated in the UI
	this.platformID = 'DFA'; // => will be set in tagr meta data
	
	// set default server details
    this.prt = location.protocol;

    // initialise source object
    this.src = new Object();
    this.src.placementID = '1';
    this.src.campaignID = '1';

    // get page data
    this.page = new gmDomainData();

    //generate random number
    this.rand = Math.floor(Math.random()*9999999999);
}

function gmDomainData()
{
	
	this.ifC = false;
	
	// Test to see if the page is running within an iFrame
	try
    {
        if(parent !== window){this.ifC = true;}
    }
    catch(err)
    {
        this.ifC = true;
    }
	
	if(this.ifC)
	{
		try
		{
			if((window.location.ancestorOrigins) && (window.location.ancestorOrigins.length > 1))
			{
				this.pD = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1];
				this.pP = '/';
			}
			else
			{
				if(this.ifC && document.referrer.length > 0)
				{
					this.pD = document.referrer.split('/')[2];
					this.pP = document.referrer.substr(document.referrer.indexOf(document.referrer.split('/')[2])+document.referrer.split('/')[2].length);  
				}
				else
				{
					this.pD = encodeURIComponent(location.host);
					this.pP = encodeURIComponent(location.pathname);
				}
			}
		}
		catch(err)
		{
			if(document.referrer.length > 0)
			{
				this.pD = document.referrer.split('/')[2];
				this.pP = document.referrer.substr(document.referrer.indexOf(document.referrer.split('/')[2])+document.referrer.split('/')[2].length);  
			}
			else
			{
				this.pD = encodeURIComponent(location.host);
				this.pP = encodeURIComponent(location.pathname);
			}
		}
	}
	else
	{
        this.pD = encodeURIComponent(location.host);
        this.pP = encodeURIComponent(location.pathname);
    }
}

function gmSerialise(obj,name)
{
var pairs = [];
    for (var prop in obj) 
    {
        if (obj[prop]=='') {continue;}
        pairs.push(name+'.'+prop +'='+obj[prop]);
        }
    return pairs.join('&');
}

function gmCreateRequest(gmtagr)
{   
    var srcParams = gmSerialise(gmtagr.src,'src');
    var gmRequest = document.createElement("img");
    gmRequest.src = gmtagr.prt+'//'+gmtagr.trackingDomain+'/t/v2/imp?tagid='+gmtagr.tagid+'&src.domain='+gmtagr.page.pD+'&src.url='+gmtagr.page.pP+'&'+srcParams+'&src.rand='+gmtagr.rand;    
    var _body = document.getElementsByTagName("body")[0];
    var _div = document.createElement("div");
    _div.id = "tagrdiv";
    _div.style.width = "0";
    _div.style.height = "0";
    _div.style.overflow = "hidden";
    _div.style.position = "absolute";
    gmRequest.style.width = "1";
    gmRequest.style.height = "1";
    gmRequest.style.border = "0";
    _div.appendChild(gmRequest);
    _body.appendChild(_div);
}

function gmParseQuery ( query ) {
  var Params = new Object ();
  if ( ! query ) return Params;
  var Pairs = query.split(/[;&]/);
  for ( var i = 0; i < Pairs.length; i++ ) {
    var KeyVal = Pairs[i].split('=');
    if ( ! KeyVal || KeyVal.length != 2 ) continue;
    var key = unescape( KeyVal[0] );
    var val = unescape( KeyVal[1] );
    val = val.replace(/\+/g, ' ');
    Params[key] = val;
  }
  return Params;
}

var gmparams=new gmtagr();

var gmScripts = document.getElementsByTagName('script');
for(var idx=gmScripts.length; idx>0; idx--)
{
    if(gmScripts[idx-1].src.indexOf(gmparams.gmScriptName)!=-1)
    {
        gmThisScript = gmScripts[idx-1];
        break;
    }
}
 
var gmQueryStringParams = gmThisScript.src.replace(/^[^\?]+\??/,'');
 
var gmURLParams = gmParseQuery(gmQueryStringParams);
gmparams.src.placementID = ( gmURLParams.hasOwnProperty('placementID') ) ? gmURLParams['placementID']:'1';
gmparams.src.campaignID = ( gmURLParams.hasOwnProperty('campaignID') ) ? gmURLParams['campaignID']:'1';

gmCreateRequest(gmparams);