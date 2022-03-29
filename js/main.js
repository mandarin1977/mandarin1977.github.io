$(function(){
    ///////////////////   
    //$('css선택자').on('이벤트' , 할일)
    ///////////////////////
    $('.topBanner i').on('click', topbannerHandler);
    function topbannerHandler () {
        $('.topBanner').slideUp();
    }
    //////////////////////////////////////////////////////////

    ////////***각각의 슬라이드에 애니메이션.../////////////////

    $('.mainVisualSlide').on('init reInit afterChange',function(){
        let current =  $('.slick-current');
        console.log(current);
        current.addClass('on').siblings().removeClass('on');
    });


$('.mainVisualSlide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows :true,
    pauseOnHover:false,
    pauseOnFocus:false,
    prevArrow: '<i class="xi-arrow-left sleft"></i>',
    nextArrow: '<i class="xi-arrow-right sright"></i>',
    dots:true,
});

//$('.mainVisualSlide figure').eq(1).addClass('on');
//전체 슬라이드에서 class를 떼고, 지금 슬라이드에 클래스를 붙이는 일//
//$('.mainVisualSlide').on('afterChange', function(s,i,c){
    //c = > 0,1,2//
  //  $('.mainVisualSlide figure').removeClass('on')
   // $('.mainVisualSlide figure').eq(c+1).addClass('on');
//});
//


$('.movieBtn i:first-child').on('click',function(){
    $('#admovie').trigger('play');
})
$('.movieBtn i:last-child').on('click',function(){
    $('#admovie').trigger('pause');
})

$('.slideArrow i:first-child').on('click', function(){
    $('.mainVisualSlide').slick('slickPrev')
    
});
$('.slideArrow i:first-child').on('click', function(){
    $('.mainVisualSlide').slick('slickNext')
    
});

$('.mainVisualLink li').on('click', function(){
    let idx = $(this).index();
    $('.mainVisualSlide').slick('slickGoTo', idx);
})


});
