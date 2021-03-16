
/*|-----------------------------------------|*\
|#| AJAX Class Wrapper                      |#|
|#| Created By Zero Tolerance               |#|
|#| CVS$v1.0.2$                             |#|
|#| (C) Inferno Technologies 2005 - 2006    |#|
|#| All Rights Reserved                     |#|
\*|-----------------------------------------|*/

// example usage:
/*
 AJAX = new _AJAX(true)
 AJAX.onreadystatechange(myresponsefunction)
 AJAX.send('var=hi&var2=hi2', 'POST', 'index.php')
*/

/**
	_ajax
	Initiates class wrapper for AJAX

	@param	_async	boolean		Determines if asynchronous is on or not

	@return 	null
*/

function _ajax(_async)
{
	this.async   = _async
	this.handler = null
}

/**
	[_ajax]createhandler
	Initiates xml http header request (handler)

	@return		boolean		Returns true on success
*/

_ajax.prototype.createhandler = function()
{
	try
	{
		this.handler = new XMLHttpRequest
		return this.handler.setRequestHeader ? true : false
	}
	catch(e)
	{
		try
		{
			this.handler = new ActiveXObject('Microsoft.XMLHTTP')
			return true
		}
		catch (e)
		{
			return false
		}
	}

	return false
}

/**
	[_ajax]onreadystatechange
	Sets trigger function to execute once request state changes

	@param	_func	Function	function to trigger

	@return		boolean		Returns true on success
*/

_ajax.prototype.onreadystatechange = function(_func)
{
	if (this.handler == null)
	{
		if (!this.createhandler())
		{
			return false
		}		
	}

	this.handler.onreadystatechange = _func
	return true
}

/**
	[_ajax]encode_datastream
	Automatically encodes URI components

	@param	_datastream	string		URI Components
*/

_ajax.prototype.encode_datastream = function(_datastream)
{
	_datastream = _datastream.split('&')

	for (key in _datastream)
	{
		if (_datastream[key].match(/\=/))
		{
			bits = _datastream[key].split('=')

			_datastream[key] = bits[0] + '=' + encodeURIComponent(bits[1])
		}
	}

	return _datastream.join('&')
}

/**
	[_ajax]send
	Sends the http xml request

	@param	_datastream	string		Request data
	@param	_type		string		Request type
	@param	_file		string		Request file (index.php/index.cgi, etc...)

	@return			null
*/

_ajax.prototype.send = function(_datastream, _type, _file)
{

	if (!this.handler.readyState && !this.handler.readyState < 4)
	{
		_datastream = this.encode_datastream(_datastream)
		this.handler.open(_type, _file + '?' + ((_type == 'GET')? _datastream : ''), this.async)
		this.handler.send(_datastream)
	}	
}


