window.onload = function (){
    var htmlEl = document.querySelector("html");
    var headerEl = document.querySelector("header");
    var on_menu = document.querySelector("nav");
    var mob_btn = document.querySelector(".mobile_main_menu");
    var sb_discoverEl = document.querySelector(".sb_discover");
    var discover_boxEls = document.querySelectorAll(".discover_box");
    var div_imgEl = document.querySelectorAll(".slider_img > div");
    var i = 0;

    mob_btn.addEventListener("click", mob_menu_ani);
    document.addEventListener("scroll", scrollWork);
    foo();
    setInterval(foo,2000);

    function mob_menu_ani(){
        if( on_menu.className === ""){
            on_menu.classList.add("on");
            mob_btn.classList.add("cross");
            mob_btn.classList.remove("none");
        } else if ( on_menu.className === "on" ) {
            on_menu.classList.remove("on");
            mob_btn.classList.remove("cross");
            mob_btn.classList.add("none");
        }
    }


    function scrollWork() {
        console.log(discover_boxEls[1].offsetTop + sb_discoverEl.offsetTop);
        console.log(htmlEl.scrollTop);
        ani();
        function ani() {
            for(var i = 0 ; i < 6 ;i++){
                if ( htmlEl.scrollTop + 914 > (discover_boxEls[i].offsetTop + sb_discoverEl.offsetTop)) {
                    discover_boxEls[i].classList.add("on");
                }
            }
        }
        
        if((htmlEl.offsetHeight - 1450) < htmlEl.scrollTop){
            headerEl.className = "scroll_fix";
        } else {
            headerEl.className = "";
        }
    }

    function foo(){
    if (i === 0) {
        div_imgEl[div_imgEl.length - 1].classList.remove("on")
        div_imgEl[i].classList.add("on");
        i++;
    } else if (div_imgEl.length === i) {
        div_imgEl[i - 1].classList.remove("on")
        i = 0;
        foo();
    } else {
        div_imgEl[i - 1].classList.remove("on")
        div_imgEl[i].classList.add("on");
        i++;
    }
    }
}