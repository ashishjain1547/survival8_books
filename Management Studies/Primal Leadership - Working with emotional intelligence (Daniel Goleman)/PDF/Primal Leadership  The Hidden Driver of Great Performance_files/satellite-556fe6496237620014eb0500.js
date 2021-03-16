var distance = [25,50,75,100];
$(window).scroll(function () { 
    var scrollDist = Math.round(jQuery(".meter-granules-filled").css("width").match(/[0-9]*/)[0]/jQuery(".progress-meter").css("width").match(/[0-9]*/)[0]*100);
    for(var i = 0; i < distance.length; i++){
        if(scrollDist >= distance[i] && distance[i] != 100000){
          	ga('2627ed8a59a02e1d9cd65652cb633058.set', 'metric3', 1);
            ga('2627ed8a59a02e1d9cd65652cb633058.send', 'event', 'content interactions', 'scroll depth', distance[i] + '%', {'nonInteraction': 1});
            //_satellite.notify(distance[i],5);
            distance[i]=100000;
        }
    }
});
