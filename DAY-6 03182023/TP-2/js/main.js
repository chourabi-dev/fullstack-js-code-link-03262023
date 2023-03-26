const todoElement = document.getElementById("todo");
const todosList = document.getElementById("todos-list");

var todos = [];



function showTodos(){
    let blocHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];


        const tmp = '<li><p>'+todo.title+'</p><p class="text-muted"><small>'+todo.createdAt+'</small></p></li>';
        blocHTML = blocHTML + tmp;
    }


    todosList.innerHTML = blocHTML;
}




function ajouter(){
    if ( todoElement.value != '' ) {
        
        const todo = { "title":todoElement.value, "createdAt":new Date() }

        todos.push(todo);


        todoElement.value='';

        showTodos();
    }
}