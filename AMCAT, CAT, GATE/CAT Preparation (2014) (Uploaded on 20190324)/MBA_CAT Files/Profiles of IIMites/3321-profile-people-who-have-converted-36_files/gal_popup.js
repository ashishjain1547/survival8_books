    //  %%product_title%% %%version%%
    //	Copyright ©2005-%%current_year%% All rights reserved by www.thevbgeek.com
    //	Code may not be used in whole or part without written permission.
    //  You may not distribute this or any of files in whole or significant part
    //	without explicit written permission.
    // ---------------- %%product_title%% IS NOT FREE SOFTWARE ----------------
	// http://www.thevbgeek.com
    // Licensed to %%domain%% %%email%%
    // License key: %%licensekey%%
    // Downloaded: %%download_date%%

// change to gal_opens=1; for RTL
var gal_opens=0;

//change timeout
var gal_timeout=1000;

var posx = 0;
var posy = 0;

document.documentElement.onmousemove = mousexy;

var tempX = 0;
var tempY = 0;

var gleftpx;
var gtoppx;
var grightpx;
var gheightpx;

function mousexy(e)
{
    if (is_ie)
    {
	    tempX = event.clientX;
	    tempY = event.clientY;
    }
    else
    {
	    tempX = e.clientX ;
	    tempY = e.clientY;
    }
    tempY = tempY + document.documentElement.scrollTop;
	tempX = tempX + document.documentElement.scrollLeft;
    //window.status = tempX + " " + tempY;
}


function GAL_watch()
{

    e = fetch_object("GALBox");
    if (e.style.visibility == 'visible')
    {
	    var leftpx  = e.offsetLeft;
	    var toppx   = e.offsetTop;
	    var rightpx = e.offsetWidth;
        var heightpx = e.offsetHeight;

	    while ((e = e.offsetParent) != null)
	    {
	        leftpx  += e.offsetLeft;
	        toppx   += e.offsetTop;
	    }
        //status = leftpx;
        if ((tempX > leftpx) && (tempX < (leftpx + rightpx)) && (tempY > toppx) && (tempY < (heightpx + toppx)))
        {
            setTimeout("GAL_watch()", gal_timeout);
            gal_opens = 1;

        }
        else
        {
	        if ((tempX > gleftpx) && (tempX < (gleftpx + grightpx)) && (tempY > gtoppx) && (tempY < (gheightpx + gtoppx)))
            {
	            setTimeout("GAL_watch()", gal_timeout);
	            gal_opens = 1;
            }
            else
            {
	            gal_opens = 0;
	            fetch_object("GALBox").style.visibility = 'hidden';
            }
        }

    }

}

function GAL_popup(e,offset,width, box_style, value,value_style, title, title_style)
{

	var anchorright = 0;
    if (!offset)
    {
    	offset = 1;
    }

	gleftpx 	= e.offsetLeft;
	gtoppx 	= e.offsetTop;
    grightpx = e.offsetWidth;
    gheightpx = e.offsetHeight;

	while ((e = e.offsetParent) != null)
	{
		gleftpx 	+= e.offsetLeft;
		gtoppx	+= e.offsetTop;
	}

    var toppx = gtoppx;
    var leftpx = gleftpx;
    var rightpx = grightpx;

    if (is_ie)
	{
    	toppx	+= 15;
    }
    else
    {
        toppx 	+=12;
    }

	var dest = fetch_object("GALBox");
    toppx=toppx-offset;

    if (width)
    {
    	width = " Width='" + width + "' ";
    }
    else
    {
    	width = " Width='300px' ";
    }
	var innerhtml="<table border='0' cellpadding='0' cellspacing='0' " + width + "><tr><td onmouseover=\"GAL_keepopen();\" onmouseout=\"GAL_hidepopup();\"><div " + box_style + width + " >";
    if (title)
    {
    	innerhtml=innerhtml + "<div " + title_style + " >" + title + "</div>";
    }
    innerhtml= innerhtml + "<div " + value_style + " >" + value + "</div></div></td><tr></table>";
    dest.innerHTML=innerhtml;

    //alert(innerhtml);


    if (anchorright == 1)
    {
	    rightpx = leftpx - dest.offsetWidth + rightpx;
	    if (rightpx<0)
	    {
	        rightpx = 0;
	    }
    	var anchor = rightpx + "px";
    }
    else
    {
        if (document.documentElement)
        {
        	if (document.documentElement.clientWidth < (leftpx + dest.offsetWidth))
            {
            	leftpx = document.documentElement.clientWidth - dest.offsetWidth;
            }
        }
        var anchor = leftpx + "px";
    }

    dest.style.left = anchor;
    dest.style.top  = toppx + "px";

	dest.style.visibility='visible';
    gal_opens = 2;
    setTimeout("GAL_watch()", 1000);
}

function GAL_hidepopup()
{
    gal_opens--;
}
function GAL_keepopen(){
    gal_opens++;
}