jQuery(document).ready(function(){  
    jQuery('.sf-menu > li').each(function(){
            $('>a', this).append("<span class='hoverline1'></span><span class='hoverline2'></span><span class='hoverline3'></span>");
    })
});