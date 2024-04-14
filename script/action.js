

$('.char_box li').eq(0).addClass('active')

let charactor = setInterval(charRolling, 2000)


let i = 0
function charRolling(){
    i++
    if(i >= 4){
        i = 0
    }
    $('.char_box li').eq(i).addClass('active').siblings().removeClass();
}


$('.char_box li').mouseenter(function(){
    clearInterval(charactor)
    $(this).addClass('active').siblings().removeClass()
    i = $(this).index()
});

$('.char_box li').mouseleave(function(){
    charactor = setInterval(charRolling, 2000)
});



 //하트 실행시키기- favorite에 active 적어야 실행됨
//$('.favorite').each(function(){ /* 새로고침 했을때 실행해라 */
    //favorite.call(this)
//})

//$('.favorite').click(function(){ /* 클릭했을때 실행해라 */
    //$(this).toggleClass('active') //액티브 클래스가 적용되면 실행하라
   //favorite.call(this)
   //return false
//})

 //function favorite(){
    //if($(this).hasClass('active')){
        //$(this).text('♥').css({color:'#e04562'});
    //} else{
        //$(this).text('♡').css({color:''});
    //}
//} 

//최근 본 상품
//parseInt()-문자를 숫자로 바꾸는 명령어이다.
let todayTop = parseInt($('.prod_today').css('top'));
//서브페이지 변수
let prodNavPosi
if($('#section_sub').length > 0){
    prodNavPosi = $('.prod_nav').offset().top;
}


$(window).scroll(function(){
    let scrT = $(window).scrollTop();

    $('.prod_today').stop().animate({top:scrT+todayTop}, 1000)

/* 서브페이지-상세설명,관련상품 노란띠가 스크롤따라옴 */
    if(scrT >= prodNavPosi){
        $('.prod_nav').addClass('active')
    } else {
        $('.prod_nav').removeClass('active')
    }
})

$('.small_img li').mouseenter(function(){
    let imgSrc = $(this).find('img').attr('src');
    $('.big_img img').attr('src',imgSrc)
    $(this).addClass('active').siblings().removeClass();
});

/* 서브페이지-상세설명,관련상품 누르면 그 위치로 감 */
$('.prod_nav a').click(function(){
    let prodNavHref = $(this).attr('href');

    let prodNavTop = $(prodNavHref).offset().top;

    $('html').animate({scrollTop:prodNavTop - 70})
})



