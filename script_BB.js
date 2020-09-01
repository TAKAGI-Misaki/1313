// JavaScript Document
$(function(){ 
    
$(window).load(function () {
// 処理
    $('#wrapper').fadeIn();
    $('#load').fadeOut();
    
　setTimeout(function(){
     
          // 遅延させてフェードイン
         $('.topVisual-bar').animate({ opacity: 0.5}, { duration: 1100, easing: 'swing'});
         $('.topVisual-bar2').animate({ opacity: 1}, { duration: 1100, easing: 'swing'});
     
},400);    
    
});    

    //fadeIn
    $(window).on('load scroll',function(){
        
         
        if ($(window).scrollTop() > 850) {
        
        $('.one').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/1.png?raw=true)');
        $('.two').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/3.png?raw=true)'); 
        $('.three').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/5.png?raw=true)'); 
        $('.four').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/6.png?raw=true)'); 
        
        } else if ($(window).scrollTop() < 700) {
        $('.one').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/1-long.png?raw=true)');
        $('.two').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/3-long.png?raw=true)'); 
        $('.three').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/5-long.png?raw=true)'); 
        $('.four').css('background-image','url(https://github.com/TAKAGI-Misaki/1313/blob/master/img/6-long.png?raw=true)'); 
            
        } 
     });


});  