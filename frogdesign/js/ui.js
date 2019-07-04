window.onload = function (){
    var htmlEl = document.querySelector("html");
    var headerEl = document.querySelector("header");
    var navEl = document.querySelector("nav");
    var videoEl = document.querySelector(".frogdesign-ani > video");
    var imgEls = document.querySelectorAll(".frogdesign-slider > div");
    var btn_leftEl = document.querySelector(".btn.left");
    var btn_rightEl = document.querySelector(".btn.right");
    var btn_dotsEls = document.querySelectorAll(".btn-dot > div");
    var afterValue = 0;
    var sliderCount = 0;

    window.addEventListener("scroll", scrollWork);
    btn_leftEl.addEventListener("click", leftWork);
    btn_rightEl.addEventListener("click", rightWork);

    for(var i = 0;i<btn_dotsEls.length;i++){
        btn_dotsEls[i].onclick = (function(j){
            return function(){
                resetDot();
                resetSlider();
                imgEls[j].classList.add("on");
                btn_dotsEls[j].classList.add("on");
                sliderCount = j;
                return false;
            }
        })(i);
    }

    slowMoveTop();
    function scrollWork(){
        var scrollTopValue = htmlEl.scrollTop;
        headerControl(scrollTopValue);
        slowMoveTop(scrollTopValue);
    };

     //header 스크롤무브 방향에 따라 보이거나 숨기
    function headerControl(currentValue){
        if(currentValue < afterValue){
            headerEl.classList.remove("on");
        } else {
            headerEl.classList.add("on");
        }
        if(currentValue > 50){ 
            navEl.classList.add("on");
            headerEl.classList.add("white");
            
        } else {
            navEl.classList.remove("on");
            headerEl.classList.remove("white");
        }
        afterValue = currentValue
    }

    //parallax scrolling
    function slowMoveTop(currentValue) {
        if(currentValue > 800){
            return;
        }
        var moveValue = currentValue * 0.3;
        videoEl.style.transform = "translateY(" + moveValue +"px)";
    }

    //슬라이더 left
    function leftWork(e){
        e.preventDefault();
        if(sliderCount===0){
            sliderCount=4;
            imgEls[4].classList.add("on");
            imgEls[0].classList.remove("on");
            dotSlider();
            return;
        } 
        imgEls[sliderCount-1].classList.add("on");
        imgEls[sliderCount].classList.remove("on");
        sliderCount--;
        dotSlider();
    }

    //슬라이더 right
    function rightWork(e){
        e.preventDefault();
        sliderCount++;
        if(sliderCount === 5){
            sliderCount=0;
            imgEls[0].classList.add("on");
            imgEls[4].classList.remove("on");
            dotSlider();
            return;
        } 
        imgEls[sliderCount].classList.add("on");
        imgEls[sliderCount-1].classList.remove("on");
        console.log(sliderCount);
        dotSlider();
    }
    //슬라이더 순서로 온되기
    function dotSlider(){
        resetDot();
        btn_dotsEls[sliderCount].classList.add("on");
    }
    //dot 리셋
    function resetDot(){
        for(var i = 0;i < btn_dotsEls.length;i++){
            btn_dotsEls[i].classList.remove("on");
        }
    }
     //slider 리셋
    function resetSlider(){
        for(var i = 0;i < btn_dotsEls.length;i++){
            imgEls[i].classList.remove("on");
        }
    }

}