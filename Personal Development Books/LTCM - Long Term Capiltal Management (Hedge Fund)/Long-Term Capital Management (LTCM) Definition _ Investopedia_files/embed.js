/************************************
 *
 * SmartAsset embed.js
 *
 ************************************/

(function (sa)
{
    //alert("HERE2");

    if (!Array.isArray(sa))
    {
        sa = [sa];
    }

    var processor = function (sa_instance)
    {
        var id = new Date().getMilliseconds();

        var getNumber = function (t)
        {
            if (typeof(t) === "number")
            {
                return t;
            }
            return 0;
        }

        var ajax = function (url, callbackFunction)
        {
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
                    callbackFunction(request.responseText);
            };

            var getRequest = function ()
            {
                if (window.XMLHttpRequest)
                {
                    //alert("Using new XML request");
                    console.log("Using XMLHttpRequest");
                    return new XMLHttpRequest();
                }
                else if (window.ActiveXObject)
                {
                    console.log("Using MS.XMLHTTP");
                    return new ActiveXObject('Microsoft.XMLHTTP');
                }

                return false;
            };

            var postBody = (arguments[2] || "");

            var callbackFunction = callbackFunction;
            var url = url;
            var request = getRequest();

            console.log("URL", url, "QUERY", postBody);

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
                    xdr.onprogress = function() {};
                    xdr.ontimeout = function() {}; // no aborting
                    xdr.onload = function ()
                    {
                        callbackFunction(xdr.responseText);
                    }
                    xdr.open("GET", url + "?" + postBody, true);
                    xdr.contentType = "application/x-www-form-urlencoded";

                    xdr.send();
                }
                return;
            }

            if (request)
            {
                var req = request;
                req.onreadystatechange = bindFunction(stateChange, this);
                req.open("GET", url + "?" + postBody, true);
                req.send();
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

        var insertAndExecute = function (element, text)
        {
            //console.log(text);
            var newdiv = document.createElement("div");
            newdiv.innerHTML = text;

            element.innerHTML = ""; //text;

            element.appendChild(newdiv);

            var scripts = element.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++)
            {
                if (scripts[i].src != "")
                {
                    var tag = document.createElement("script");
                    tag.src = scripts[i].src;
                    document.getElementsByTagName("head")[0].appendChild(tag);
                }
                else
                {
                    eval(scripts[i].innerHTML);
                }
            }
        }

        // variable indicating whether the on_load event has been triggered
        var isLoaded = false;

        // since isVisible is sometimes triggered *before* the widget has loaded,
        // we store this variable to trigger once isLoaded is called
        var isVisible = false;

        var on_load = null, on_change = null, on_click = null, on_nowidget = null;
        var on_expand = null, on_collapse = null, on_visible = null;

        if (typeof(sa_instance.events) === "object")
        {
            if (typeof(sa_instance.events.on_load) === "function")
            {
                on_load = sa_instance.events.on_load;
            }
            if (typeof(sa_instance.events.on_change) === "function")
            {
                on_change = sa_instance.events.on_change;
            }
            if (typeof(sa_instance.events.on_click) === "function")
            {
                on_click = sa_instance.events.on_click;
            }
            if (typeof(sa_instance.events.on_nowidget) === "function")
            {
                on_nowidget = sa_instance.events.on_nowidget;
            }
            if (typeof(sa_instance.events.on_expand) === "function")
            {
                on_expand = sa_instance.events.on_expand;
            }
            if (typeof(sa_instance.events.on_collapse) === "function")
            {
                on_collapse = sa_instance.events.on_collapse;
            }
            if (typeof(sa_instance.events.on_visible) === "function")
            {
                on_visible = sa_instance.events.on_visible;
            }
        }

        var embedUrl = sa_instance.embedUrl;
        var version = getNumber(sa_instance.version);
        var postdata = sa_instance.data;
        var src = encodeURIComponent(window.location.href);
        var referrer = encodeURIComponent(window.document.referrer);
        var random = Math.random().toString(36).replace(/[^a-z]+/g, '');

        if (typeof(sa_instance.src) === "string")
        {
            src = encodeURIComponent(sa_instance.src);
        }

        console.log("SRC: " + decodeURIComponent(src) + " RND: " + random + " CTR: " + sa_instance.container);

        var do_expand = function()
        {
            //
            // add "expanded" class to container
            var classes = document.querySelector(sa_instance.container).className;
            if (classes.indexOf("expanded") == -1)
            {
                classes += " expanded";
                document.querySelector(sa_instance.container).className = classes;
            }
        };

        var do_collapse = function()
        {
            //
            // add "expanded" class to container
            var classes = document.querySelector(sa_instance.container).className;
            classes = classes.replace(/\bexpanded\b/,'');
            document.querySelector(sa_instance.container).className = classes;
        };

        var listener = function (event)
        {
            //console.log("Event received: ", event);
            if (typeof(event.data) === "string")
            {
                var data = event.data;
                if (data.indexOf(random) == 0)
                {
                    var event = data.substr(data.indexOf(":") + 1);
                    if (on_change != null && event == "on_change")
                    {
                        on_change();
                        return;
                    }

                    //
                    // call expand event
                    if (event == "on_expand")
                    {
                        do_expand();
                    }

                    //
                    // call collapse event
                    if (event == "on_collapse")
                    {
                        do_collapse();
                    }

                    if (on_visible != null && event == "on_visible")
                    {
                        on_visible();
                        return;
                    }

                    if (on_expand != null && event == "on_expand")
                    {
                        on_expand();
                        return;
                    }

                    if (on_collapse != null && event == "on_collapse")
                    {
                        on_collapse();
                        return;
                    }

                    if (on_click != null && event == "on_click")
                    {
                        on_click();
                        return;
                    }

                    if (event == "on_load")
                    {
                        isLoaded = true;
                        if (on_load != null)
                        {
                            on_load();
                        }
                        return;
                    }

                    if (on_nowidget != null && event == "on_nowidget")
                    {
                        on_nowidget();
                        return;
                    }
                }
            }
        }

        if (window.addEventListener)
        {
            addEventListener("message", listener, false);
        }
        else
        {
            attachEvent("onmessage", listener);
        }

        var url = "//smartasset.com";
        // for smartasset.com domains but NOT blog.office.smartasset.com, use blank URL
        if (src.indexOf("smartasset.com") > -1 && src.indexOf("blog.office.smartasset.com") == -1)
        {
            url = "";
        }

        if (typeof(embedUrl) === "string")
        {
            url = embedUrl;
            console.log("[CAPTIVATE] Using debug embed url: " + url);
        }

        var getu = url + "/embed/frame"; //?src=" + src + "&ref=" + referrer + "&ver="+version+"&rnd=" + random;
        postdata.src = src;
        postdata.ref = referrer;
        postdata.ver = version;
        postdata.rnd = random;

        //console.log("PD: ", postdata);

        console.log("[CAPTIVATE] Getting: " + getu);

        ajax(getu, function (d)
        {
            insertAndExecute(document.querySelector(sa_instance.container), d);
            //alert("LOADED");
        }, serialize(postdata));

    };

    var processors = [];
    while (sa.length > 0)
    {
        var item = sa.pop();
        processors.push(new processor(item));
    }

})(SA);

