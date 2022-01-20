const showTodo = document.querySelector('#change');
const modalTodo = document.querySelector('main');


let isModal = true;
function handleModalChange(){
    if(isModal){
    modalTodo.classList.remove('hide');
    showTodo.innerText = 'Hide \nTodo List';
    isModal = false;
    }else{
    modalTodo.classList.add('hide');
    showTodo.innerText = 'Show \nTodo List';
    isModal = true;
    }
}

showTodo.addEventListener('click', handleModalChange)