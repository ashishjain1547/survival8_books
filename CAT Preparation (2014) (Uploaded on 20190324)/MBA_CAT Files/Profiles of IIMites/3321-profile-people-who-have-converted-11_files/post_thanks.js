/*=====================================*\
|| ################################### ||
|| # Post Thank You Hack version 7.5 # ||
|| ################################### ||
\*=====================================*/

function post_thanks_give(postid, integrate)
{
	fetch_object('post_thanks_button_' + postid).style.display = 'none';

	if (integrate == true)
	{
		fetch_object('post_groan_button_' + postid).style.display = 'none';
	}

	var handleSuccess = function(o){
		if(o.responseText !== undefined){
			fetch_object('post_thanks_box_' + postid).innerHTML = o.responseText;
		}
	}
	var handleFailure = function(o){
		if(o.responseText !== undefined){
			alert(o.responseText);
		}
	}
	var callback =
	{
  		success: handleSuccess,
  		failure: handleFailure
	};

	var sUrl = 'post_thanks.php';
	var postData = 'do=post_thanks_add&using_ajax=1&p=' + postid + '&securitytoken=' + SECURITYTOKEN;

	YAHOO.util.Connect.asyncRequest('POST', sUrl, callback, postData);
}
function post_thanks_remove_all(postid, integrate)
{
	var handleSuccess = function(o){
		if(o.responseText !== undefined){
			fetch_object('post_thanks_box_' + postid).innerHTML = o.responseText;
		}
	}
	var handleFailure = function(o){
		if(o.responseText !== undefined){
			alert(o.responseText);
		}
	}
	var callback =
	{
  		success: handleSuccess,
  		failure: handleFailure
	};

	var sUrl = 'post_thanks.php';
	var postData = 'do=post_thanks_remove_all&using_ajax=1&p=' + postid + '&securitytoken=' + SECURITYTOKEN;

	YAHOO.util.Connect.asyncRequest('POST', sUrl, callback, postData);

	fetch_object('post_thanks_button_' + postid).style.display = ''

	if (integrate == true)
	{
		fetch_object('post_groan_button_' + postid).style.display = '';
	}
}
function post_thanks_remove_user(postid, integrate)
{
	var handleSuccess = function(o){
		if(o.responseText !== undefined){
			fetch_object('post_thanks_box_' + postid).innerHTML = o.responseText;
		}
	}
	var handleFailure = function(o){
		if(o.responseText !== undefined){
			alert(o.responseText);
		}
	}
	var callback =
	{
  		success: handleSuccess,
  		failure: handleFailure
	};

	var sUrl = 'post_thanks.php';
	var postData = 'do=post_thanks_remove_user&using_ajax=1&p=' + postid + '&securitytoken=' + SECURITYTOKEN;

	YAHOO.util.Connect.asyncRequest('POST', sUrl, callback, postData);

	fetch_object('post_thanks_button_' + postid).style.display = ''

	if (integrate == true)
	{
		fetch_object('post_groan_button_' + postid).style.display = '';
	}	
}