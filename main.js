//메인 메뉴 움직이는 바
$(".gnb li a").mouseenter(function () {
    let bar = $(this).position().left;
    console.log(bar)
    let widNum = $(this).width();
    $(".bar").animate({
        "left": bar + "px",
        "width": widNum + "px",
        "opacity": 1
    }, 300)
})

$(".gnb").mouseleave(function () {
    $(".bar").animate({
        "left": 0,
        "width": 0,
        "opacity": 0
    })
})


// skill_bar
  
let countDate=$('.box h3');
let executed=false;

$(window).scroll(function(){
  let $scroll=$(this).scrollTop() + 200;
  let $offset=$('.easypiechart').offset().top;
  if($scroll>$offset){
    pieChart()
 
 if(!executed){
  countDate.each(function(){
    let current=$(this); 
    let target=current.attr('data-rate');
    // A.animate({wdith:100%},시간,이징,끝나는일)
    // $({변수:초기값}).animate({변수:종료값},{옵션})
    $({rate:0}).animate({rate:target},{
      duration:2500,
      progress:function(){
        let now=this.rate;
        
        current.text(Math.ceil(now)+"%")
      }
    })
  })
  executed=true;
 }
  
  }
})

function pieChart(){
  $('.chart').easyPieChart({
    //your options goes here
    barColor:'#000',
    scaleColor:false,
    trackColor:'#ddd',
    lineWidth:10,
    size:150,
    animate:2000,
    lineCap: "butt"
});

}







// 전체화면 애니메이션

$('.animate').scrolla({
    // default
    mobile: true, // disable animation on mobiles --> 모바일 버전에서 활성화 할 것인지.
    once: false, // only once animation play on scroll --> 스크롤시 한 번 또는 여러 번 실핼을 설정 할 것인지
    animateCssVersion: 4 // used animate.css version (3 or 4) --> 스크롤라의 버전
});




// menu
// $(".menuOpen .open").on("click",function(){})
$(".menuOpen .open").click(function (e) {
    e.preventDefault();
    $(".menuOpen .menuWrap").addClass("on")
});
$(".menuWrap .close").click(function (e) {
    e.preventDefault(); 
    $(".menuOpen .menuWrap").removeClass("on")
});


$(".menuWrap ul li").click(function (e) {
   // e.preventDefault();
    $(".menuOpen .menuWrap").removeClass("on")
});





// //background-color 변경

// $(window).scroll(function () {
//     //$(this)는 window를 의미함
//     let scrollTop = $(this).scrollTop();
//     console.log(scrollTop)
//     let offset = $('.PORTFOLIO').offset().top - 400;
//     if (scrollTop > offset) {
//         $("body").addClass('on')
//     } else {
//         $("body").removeClass('on')
//     }
// });




/* portfolio */
let hCont = $('.history_slide');
let hBtn = $('.history_btn li');
let hIndex;

hCont.slick({
dots:true,
arrows:true
});

//버튼을 클릭하면 해당 index를 찾아서 이동
hBtn.click(function (e) {
  e.preventDefault();
  let target = $(this); //클릭한 그것
  let index = target.index(); //클릭한 그것의 index번호
 // console.log(index);

  if (index == 0) {
    hIndex = 0
  } else if (index == 1) {
    hIndex = 4
  } else if (index == 2) {
    hIndex = 8  
  }
  console.log(hIndex)
  hCont.slick('slickGoTo', hIndex);

  hBtn.removeClass('active')
  target.addClass('active')
});

hCont.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //console.log(nextSlide);
  if(nextSlide >=0 && nextSlide<=3){
    hBtn.removeClass('active')
    hBtn.eq(0).addClass('active')
  }else if(nextSlide>=4 && nextSlide<=7){
    hBtn.removeClass('active')
    hBtn.eq(1).addClass('active')
  }else if(nextSlide>=8 && nextSlide<=11){
    hBtn.removeClass('active')
    hBtn.eq(2).addClass('active')
  }else if(nextSlide>=12 && nextSlide<=15){
    hBtn.removeClass('active')
    hBtn.eq(3).addClass('active')
  }

$('.history_page em').text(nextSlide + 1)
});


