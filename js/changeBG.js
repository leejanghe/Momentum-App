const changeBG = document.querySelector('.header_changeBG');


function changeBackground(){
    window.location.reload()
}

changeBG.addEventListener('click', changeBackground)