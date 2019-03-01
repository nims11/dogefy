urls=["http://doge2048.com/img/212/doge-derp-212.gif", "http://doge2048.com/img/212/doge-fat-212.gif", "http://doge2048.com/img/212/doge-gradient-212.gif", "http://doge2048.com/img/212/doge-hat-212.gif", "http://doge2048.com/img/212/doge-peepers-212.gif", "http://doge2048.com/img/212/doge-prizza-212.gif", "http://doge2048.com/img/212/doge-rainbow-212.gif", "http://doge2048.com/img/212/doge-shake-212.gif", "http://doge2048.com/img/212/doge-shake-space-212.gif", "http://doge2048.com/img/212/doge-sunglasses-212.gif", "http://doge2048.com/img/212/doge-wink-212.gif"];
window.setInterval(function(){
    x=document.getElementsByTagName('img');
    for(i=0;i<x.length;i++){
        x[i].src=urls[Math.floor(Math.random()*urls.length)];
    }
},2000);
void(0);
