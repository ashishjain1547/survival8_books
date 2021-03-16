_satellite.pushAsyncScript(function(event, target, $variables){
  
function sendCart(cartItems) {
  if(cartItems.length>0){
    for(var i=0;i<cartItems.length;i++){
      var cartItem = cartItems[i];
      var productId = cartItem['productId'];
      var productName = cartItem['title'];
      var productPrice = cartItem['unitPrice'];
      var productQuantity = cartItem['quantity'];
      var productLanguage = productId.split('-').slice(-1)[0];
      var pagePath = _satellite.getVar('pagePath');
      var categoryID = "6-1-0-0-0";
      var cmArray = new Array(5);
      cmArray[1] = pagePath;
      cmArray[2] = "";
      cmArray[3] = "";
      cmArray[4] = productLanguage;
      cmArray.shift();
      var cmAttributeString = cmArray.join("-_-").replace(/\"/g,'');
      cmCreateShopAction5Tag(productId, productName, productQuantity, productPrice, categoryID, cmAttributeString);
    };
    cmDisplayShops();
    
    _satellite.notify("Calling Add to cart pageview", 1);
    var pageID = "Checkout: Item Added to Cart";
    var cmCategoryID = _satellite.getVar('cmCategoryID');
    var cmAttributeString=_satellite.getVar("attributeString-cmPageView");
    cmCreatePageviewTag(pageID, cmCategoryID, null, null, cmAttributeString);
  };
};

jQuery(document).ajaxComplete(function(event, xhr, settings){
   _satellite.notify("ajaxComplete :"+settings.url ,1);
      if (xhr.readyState==4 && xhr.status==200)
      {
        _satellite.notify("ajaxComplete rs4 & 200:"+settings.url ,1);
        if (settings.url.indexOf("/service/commerce/shopping-cart") != -1 ) {
          if (typeof xhr.responseJSON.addToCartItems != "undefined") {
              _satellite.notify("DETECTED CART ADD",1);
              var cart=JSON.parse(localStorage.cart);
              var cartItem=[];
              cartItem[0]=cart.items.pop();
              sendCart(cartItem);
              _satellite.notify("CALLING sendCart",1);
          }else {
            var cart=JSON.parse(localStorage.cart);
            sendCart(cart.items);
            _satellite.notify("CALLING sendCart",1);
          }
        }
      }

});


});
