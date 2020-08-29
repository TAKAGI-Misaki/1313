// JavaScript Document
$(function(){ 

    //fadeIn
    $(window).on('load scroll',function(){
        
         
        if ($(window).scrollTop() > 850) {
        
        $('.one').css('background-image','url(img/1.png)');
        $('.two').css('background-image','url(img/3.png)'); 
        $('.three').css('background-image','url(img/5.png)'); 
        $('.four').css('background-image','url(img/6.png)'); 
        
        } else if ($(window).scrollTop() < 700) {
        $('.one').css('background-image','url(img/1-long.png)');
        $('.two').css('background-image','url(img/3-long.png)'); 
        $('.three').css('background-image','url(img/5-long.png)'); 
        $('.four').css('background-image','url(img/6-long.png)'); 
            
        } 
     });


});  