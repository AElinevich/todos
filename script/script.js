'use strict';
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let todoData = [];
if(localStorage.getItem('todo')) {
    todoData = JSON.parse(localStorage.getItem('todo'));
    render();
}

function render() {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
        <span class="text-todo">${item.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
        `;
        if(item.value !== '') {
            
            if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
            headerInput.value = '';
        };
    }
    const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', function() {
            item.completed = !item.completed;
            localStorage.setItem('todo', JSON.stringify(todoData));
            render();
        });

    const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function() {
            const parent = li.parentNode;
            todoData.splice(todoData.indexOf(item), 1)
            parent.removeChild(li);
            localStorage.setItem('todo', JSON.stringify(todoData));
        })
    });
};

    todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodo = {
        value : headerInput.value,
        completed: false
    };
    todoData.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todoData));
    render();
});

render();


