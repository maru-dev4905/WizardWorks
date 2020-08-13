const scroll = function(){
    let 
        nowScroll,
        lastScroll,
        headerCheck,
        delta;

    const header = document.getElementById("header");

    const initModule = function(){
        lastScroll = 0;
        headerCheck = header.classList.contains("show");
        delta = false;
        _addEventHandlers();
    }
    const _addEventHandlers = function(){
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    }
    const _checkPosition = function(){
        _changeHeaderPosition();
    }
    const _changeHeaderPosition = function(){
        nowScroll = window.scrollY;

        if(nowScroll == 0){
            if(delta){
                header.classList.remove("hide");
                delta = false;
            }
        }else if(nowScroll > 0){
            if(delta == false){
                header.classList.add("hide");
                delta = true;
            }
        }
        lastScroll = window.scrollY;
    };
    return {
        init : initModule
    }
}
scroll().init();