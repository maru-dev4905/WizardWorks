const service = function(){
    const btn = document.querySelector(".service-btn");
    const serviceCard = document.querySelector(".service-card");

    const initModule = function(){

        _addEventHandlers();
    }
    const _addEventHandlers = function(){
        window.addEventListener("load", _checkPosition);
        for(let i = 0; i < btn.length; i++){
            btn.addEventListener("click", show_content);
        }
    }
    const _checkPosition = function(){

    }
    const show_content = function(){
        
    }

    return {
        init : initModule
    }
}
service().init();