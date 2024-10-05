document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.className = 'complete-btn';
            completeBtn.onclick = () => completeTask(li);

            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Update';
            updateBtn.className = 'update-btn';
            updateBtn.onclick = () => updateTask(li, taskText);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = () => deleteTask(li);

            li.appendChild(completeBtn);
            li.appendChild(updateBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    // Function to complete a task
    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
    }

    // Function to delete a task
    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    // Function to update a task
    function updateTask(taskItem, oldTaskText) {
        const newTaskText = prompt("Update your task:", oldTaskText);
        if (newTaskText) {
            taskItem.firstChild.textContent = newTaskText;
        }
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
