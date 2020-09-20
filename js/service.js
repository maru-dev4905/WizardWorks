window.addEventListener("load",()=>{
    const tabLinks = document.getElementsByClassName("tabLinks");

    tabLinks[0].addEventListener("click",()=>{
        openService(event, 'novawallet');
    })
    tabLinks[1].addEventListener("click",()=>{
        openService(event, 'themekeyboard');
    })
    tabLinks[2].addEventListener("click",()=>{
        openService(event, 'somcloud');
    })
    
    function openService(evt , cardName){
        const serviceCard = document.querySelectorAll(".service-card");
        for(let i = 0; i < serviceCard.length; i++){
            serviceCard[i].style.display="none";
        }
        for(let i = 0; i < tabLinks.length; i++){
            tabLinks[i].className = tabLinks[i].className.replace("active","");
        }
        document.getElementById(cardName).style.display="flex";
        evt.currentTarget.classList.add('active');
    }
});