

document.addEventListener('DOMContentLoaded', (event) => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value, todoDate.value);
        todoInput.value = '';
        todoDate.value = '';
    });

    function addTodoItem(todoText, todoDateValue) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const span = document.createElement('span');
        span.textContent = todoText;

        const dateSpan = document.createElement('span');
        dateSpan.textContent = todoDateValue ? `Due: ${new Date(todoDateValue).toLocaleDateString()}` : '';
        dateSpan.classList.add('date');

        span.addEventListener('click', () => {
            span.classList.toggle('complete');
        });

        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your task:', span.textContent);
            const newDate = prompt('Edit the due date (YYYY-MM-DD):', todoDateValue);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }
            if (newDate !== null && newDate.trim() !== '') {
                dateSpan.textContent = newDate.trim() ? `Due: ${new Date(newDate).toLocaleDateString()}` : '';
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);
        li.appendChild(span);
        li.appendChild(dateSpan);
        li.appendChild(buttonGroup);
        todoList.appendChild(li);
    }
});





