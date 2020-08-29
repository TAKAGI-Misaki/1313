// JavaScript Document
$(function(){ 

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