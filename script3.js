$(document).ready(function(){
    if ($('.text').hide()){ 
    $('.text').show('slide', {direction : 'left'}, 2500);  
    $('.transform').addClass('on');
    $('.transform').css('z-index','-1')
    };
});