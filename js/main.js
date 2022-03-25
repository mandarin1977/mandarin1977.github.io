$(function(){
    ///////////////////   
    //$('css선택자').on('이벤트' , 할일)
    ///////////////////////
    $('.topBanner i').on('click', topbannerHandler);
    function topbannerHandler () {
        $('.topBanner').slideUp();
    }
    /////////////////////////////////////////

    $('.mainVisualSlide').on('init reInit afterChange',function(){
        let current =  $('.slick-current');
        console.log(current);
        current.addClass('on').siblings().removeClass('on');
    });


$('.mainVisualSlide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows :false,
    pauseOnHover:false,
    pauseOnFocus:false,
});

//$('.mainVisualSlide figure').eq(1).addClass('on');
//전체 슬라이드에서 class를 떼고, 지금 슬라이드에 클래스를 붙이는 일//
//$('.mainVisualSlide').on('afterChange', function(s,i,c){
    //c = > 0,1,2//
  //  $('.mainVisualSlide figure').removeClass('on')
   // $('.mainVisualSlide figure').eq(c+1).addClass('on');
//});
//







})

