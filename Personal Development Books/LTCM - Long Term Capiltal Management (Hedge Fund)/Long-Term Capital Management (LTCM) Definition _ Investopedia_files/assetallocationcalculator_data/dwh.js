/**
 * DataWareHouse (DWH) code
 *
 * Created by pc on 5/5/16.
 */
window.dwh = window.dwh || function()
    {
        var lastEvent = null;
        var Base64 = {
            // private property
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

            // public method for encoding
            encode: function (input)
            {
                var output = "";
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0;

                input = Base64._utf8_encode(input);

                while (i < input.length)
                {

                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2))
                    {
                        enc3 = enc4 = 64;
                    }
                    else if (isNaN(chr3))
                    {
                        enc4 = 64;
                    }

                    output = output +
                        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

                }

                return output;
            },
            // private method for UTF-8 encoding
            _utf8_encode: function (string)
            {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";

                for (var n = 0; n < string.length; n++)
                {

                    var c = string.charCodeAt(n);

                    if (c < 128)
                    {
                        utftext += String.fromCharCode(c);
                    }
                    else if ((c > 127) && (c < 2048))
                    {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else
                    {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }

                }

                return utftext;
            }
        }

        var ajax = function (url, callbackFunction, data, async)
        {
            if (typeof async !== "boolean")
            {
                async = true;
            }

            var bindFunction = function (caller, object)
            {
                return function ()
                {
                    return caller.apply(object, [object]);
                };
            };

            var stateChange = function (object)
            {
                if (request.readyState == 4)
                {
                    lastEvent = null;
                    callbackFunction(request.responseText);
                }
            };

            var getRequest = function ()
            {
                if (window.XMLHttpRequest)
                {
                    //console.log("Using XMLHttpRequest");
                    return new XMLHttpRequest();
                }
                else if (window.ActiveXObject)
                {
                    //console.log("Using MS.XMLHTTP");
                    return new ActiveXObject('Microsoft.XMLHTTP');
                }

                return false;
            };

            var postBody = (arguments[2] || "");

            var callbackFunction = callbackFunction;
            var url = url;
            var request = getRequest();

            //console.log("URL", url, "QUERY", postBody);

            //
            // MS IE hack
            //
            if (window.XDomainRequest)
            {
                console.log("Using XDomainRequest");
                var xdr = new XDomainRequest();
                if (xdr)
                {
                    // do NOT take this line off! otherwise XDR won't work on IE9 and IE10
                    xdr.onprogress = function ()
                    {
                    };
                    xdr.ontimeout = function ()
                    {
                        lastEvent = null;
                    }; // no aborting
                    xdr.onload = function ()
                    {
                        lastEvent = null;
                        callbackFunction(xdr.responseText);
                    }
                    xdr.open("POST", url, async);
                    xdr.contentType = "application/x-www-form-urlencoded";

                    xdr.send(postBody);
                }
                return;
            }

            if (request)
            {
                var req = request;
                req.onreadystatechange = bindFunction(stateChange, this);
                req.open("POST", url, async);
                req.send(postBody);
            }
        }

        /****
         * start code now
         */

        var serialize = function (obj, prefix)
        {
            var str = [];
            for (var p in obj)
            {
                if (obj.hasOwnProperty(p))
                {
                    var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                    str.push(typeof v == "object" ?
                        serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        }

        var rnd = function (length)
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        };

        //
        // set initial uid
        //
        var uid = rnd(32);
        var pid = rnd(32);

        /**
         * Set Session ID
         * @param id
         */
        var setSessionId = function(id)
        {
            uid = id;
        }

        /**
         * Set permanant id
         * @param id
         */
        var setPermanentId = function(id)
        {
            pid = id;
        }

        var getUrl = function()
        {
            var geturl = "//smrt.as/track";
            if (is_debug)
            {
                geturl = "//localhost:9999/track";
            }
            return geturl;
        }

        /**
         * Track event
         * @param event -- label
         * @param data -- object
         * @param tracker -- tracker unique ID
         */
        var track = function (event, data, tracker)
        {
            // reset windowunload function
            window.onunload = function()
            {
                dwh.unloading();
            };

            //var async = true;
            //if (window.event && window.event.type == "click")
            //{
            //    async = false;
            //}

            if (typeof tracker === "undefined" || tracker == null)
            {
                tracker = pid;
            }

            if (typeof data !== "object")
            {
                data = {};
            }

            var geturl = getUrl();
            var postdata = {}
            postdata.i = uid;
            postdata.trk = tracker;
            postdata.t = rnd(32);
            postdata.event = event;

            // add current url and page referer
            data.page_url = document.location.href;
            data.previous_url = document.referrer;

            postdata.data = Base64.encode(JSON.stringify(data));
            postdata.screen = Base64.encode(JSON.stringify({
                colors: screen.colorDepth,
                height: screen.height,
                width: screen.width
            }));

            var data = serialize(postdata);
            lastEvent = data;

            ajax(geturl, function (d)
            {
            }, data);
        };

        var is_debug = false;

        /**
         * set debug flag
         * @param t
         */
        var setDebug = function(t)
        {
            is_debug = t;
        };

        /**
         * try sending last queued event synchronously (on old browsers)
         * or via navigator.sendBeacon on new browsers
         */
        var unloading = function()
        {
            console.log("DWH.unloading", lastEvent);
            //lastEvent = "i=8mHSRBRZhyPle0J1r5vnrc7DwnLV9Byg&trk=jhasdjgdskadlkas&t=RAWG01V2bcSb601qvt6mF7dYxv9mzw2K&event=click&data=eyJ2YWx1ZSI6InRyYWNrIGV2ZW50IiwiaW50ZWdlciI6MiwiYWN0aW9uIjo4MjczLjIzMjM4MjgzMn0%3D&screen=eyJjb2xvcnMiOjI0LCJoZWlnaHQiOjgwMCwid2lkdGgiOjEyODB9";
            if (lastEvent != null)
            {
                if (navigator.sendBeacon)
                {
                    navigator.sendBeacon(getUrl(), lastEvent);
                }
                else
                {
                    ajax(getUrl(), function(){}, data, false);
                }
            }
        }

        return {
            track: track,
            setPermanentId: setPermanentId,
            setSessionId: setSessionId,
            setDebug: setDebug,
            unloading: unloading
        }
    }();

window.onunload = function()
{
    dwh.unloading();
};