
(function(){
        /* aboutme--click-img-change */
        let clickImg = document.querySelector('#imgClick');
        let imgElement=document.getElementById('myImg');
        let main=document.getElementById('aboutme');
        let images=[
            "imgs/hh11.png",
            "imgs/hh2.jpg",
            "imgs/hh33.jpg",
            "imgs/hh4.jpg",
            "imgs/add5.jpg",
            "imgs/hhh6.jpg",
            "imgs/add7.jpg",
            "imgs/hhh8.jpg",
            "imgs/hh9.jpg"
    
        ]
        let mousePos={x:0, y:0};
        let currentIndex=0;
        
        imgElement.addEventListener('click',function(){
          let currentImage=images[currentIndex];
          imgElement.src=currentImage;
          currentIndex++;
          if(currentIndex>=images.length){
            currentIndex=0;
          }
        })
        main.addEventListener('mousemove',function(e){
            //e.clientX : 현재화면에서 마우스의 X값을 추출
            //e.clientY : 현재화면에서 마우스의 Y값을 추출
            mousePos.x=-(e.clientX/window.innerWidth) * 20;
            mousePos.y=-(e.clientY/window.innerHeight) * 20;
            //console.log(e.clientX, e.clientY)
            clickImg.style.transform=`translateY(${mousePos.y}px) translateX(${mousePos.x}px)`
        })

})();

    