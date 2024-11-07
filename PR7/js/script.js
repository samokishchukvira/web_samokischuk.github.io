document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.addEventListener("DOMContentLoaded", loadTasksFromStorage);

document.getElementById('all-tasks').addEventListener('click', () => filterTasks("all"));
document.getElementById('completed-tasks').addEventListener('click', () => filterTasks("completed"));
document.getElementById('uncompleted-tasks').addEventListener('click', () => filterTasks("uncompleted"));

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') return;

    const taskItem = createTaskElement(taskText, false);
    document.getElementById('task-list').appendChild(taskItem);

    saveTasksToStorage();
    document.getElementById('new-task').value = '';
}

function createTaskElement(text, completed) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (completed) taskItem.classList.add('completed');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = completed;
    checkbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed');
        saveTasksToStorage();
    });

    const label = document.createElement('label');
    label.textContent = text;

    label.addEventListener('dblclick', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = label.textContent;
        taskItem.replaceChild(input, label);

        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                label.textContent = input.value;
                taskItem.replaceChild(label, input);
                saveTasksToStorage();
            }
        });
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
        saveTasksToStorage();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteBtn);

    return taskItem;
}

function saveTasksToStorage() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(taskItem => {
        const text = taskItem.querySelector('label').textContent;
        const completed = taskItem.classList.contains('completed') ? '1' : '0';
        tasks.push(`${completed}:${text}`);
    });
    localStorage.setItem('tasks', tasks.join('|'));
}

function loadTasksFromStorage() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks.split('|').forEach(taskStr => {
            const [completed, text] = taskStr.split(':');
            const taskItem = createTaskElement(text, completed === '1');
            document.getElementById('task-list').appendChild(taskItem);
        });
    }
}
function filterTasks(filter) {
    document.querySelectorAll('.task-item').forEach(taskItem => {
        const isCompleted = taskItem.classList.contains('completed');
        if (filter === "completed") {
            taskItem.style.display = isCompleted ? 'flex' : 'none';
        } else if (filter === "uncompleted") {
            taskItem.style.display = !isCompleted ? 'flex' : 'none';
        } else {
            taskItem.style.display = 'flex';
        }
    });
}
