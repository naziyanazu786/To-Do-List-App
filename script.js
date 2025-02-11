document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();

        if (todoText !== "") {
            const newTodoItem = document.createElement('li');
            newTodoItem.innerHTML = `
                <span>${todoText}</span>
                <div class="todo-actions">
                    <button class="complete-button"><i class="fas fa-check"></i></button>
                    <button class="delete-button"><i class="fas fa-trash"></i></button>
                </div>
            `;

            todoList.appendChild(newTodoItem);
            newTodoInput.value = '';

            const deleteButton = newTodoItem.querySelector('.delete-button');
            const completeButton = newTodoItem.querySelector('.complete-button');
            const todoSpan = newTodoItem.querySelector('span');

            deleteButton.addEventListener('click', () => {
                todoList.removeChild(newTodoItem);
            });

            completeButton.addEventListener('click', () => {
                todoSpan.classList.toggle('completed');
            });
        }
    });

    newTodoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});