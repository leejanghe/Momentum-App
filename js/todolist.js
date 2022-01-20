const showTodo = document.querySelector('#change');
const modalTodo = document.querySelector('main');

const toDoList = document.querySelector('#todo-list');
const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');


const TODO_KEY = 'todo-key';
let todoList = [];

function saveToDos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todoList))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id))
    li.remove();
    saveToDos();
}

function checkToDo(event){
    const li = event.target.parentElement;
    todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id))
    if(li.style.textDecoration === ''){
        li.style.textDecoration = 'line-through';
        li.style.textDecorationColor = 'red';
    }else{
        li.style.textDecoration = '';
        li.style.textDecorationColor = '';
    }
}


function paintToDo(newToDo){
    const liTag = document.createElement('li');
    liTag.id = newToDo.id;
    const spanTag = document.createElement('span')
    spanTag.innerText = newToDo.text;

    const checkBtn = document.createElement('button')
    checkBtn.innerText = '✔';
    checkBtn.style.color = 'green';
    checkBtn.addEventListener('click',checkToDo)
    // checkBtn.innerText = "✅";

    const button = document.createElement('button')
    button.addEventListener('click', deleteToDo)
    button.innerText =  "❌";

    liTag.appendChild(spanTag);
    liTag.appendChild(checkBtn);
    liTag.appendChild(button);
    toDoList.appendChild(liTag);
}


function handleTodoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value)
    if(toDoInput.value.length === 0){
        alert('할 일을 적어주세요!')
    }else{
        const todoText = toDoInput.value;
        toDoInput.value = '';
        const newToDoObj ={
            id: Date.now(),
            text: todoText,
        }
        todoList.push(newToDoObj)
        paintToDo(newToDoObj);
        saveToDos();
    }
    
}

toDoForm.addEventListener('submit',handleTodoSubmit);


const savedToDos = localStorage.getItem(TODO_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todoList = parsedToDos;
    parsedToDos.forEach(paintToDo)
}



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