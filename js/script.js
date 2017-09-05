$(window).resize(function(){
    $('.nav').removeAttr('style');
});

$(window).scroll(function(){
    if ($(window).scrollTop()>55){
        $('header').css('background','rgba(255, 255, 255, 0.68)');
        $('header').css('position','fixed');
        $('.nav a').css('color','black');
        $('.up').show();
    } else {
        $('header').css('background','black');
        $('header').css('position','');
        $('.nav a').css('color','white');
        $('.up').hide();
    }
});
if ($(window).width()<=650){ 
$('.logo').on('click', function(){
    $('.nav').slideToggle();
    
    $('.clone-header').css('height','255px');
    });
};




     