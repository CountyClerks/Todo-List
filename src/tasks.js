import createProject from "./projects";
import modal from "./modal";

export default function tasks() {
    const newTaskBtn = document.querySelector("#footer-add-task");
    const taskTitle = document.querySelector("#task-name");
    const taskForm = document.querySelector("#task-form");
    const cardContainer = document.querySelector("#card-content");

    let taskList = [];

    function Task(title, index) {
        this.title = title;
        this.index = index;
    }

    function addTask() {
        let taskIndex = taskList.length;
        let task = new Task (
            taskTitle.value,
            taskIndex
        );
        taskList.push(task);
        createTask(task, taskIndex);
        addListenersToTask();
        console.log(taskList);
        taskForm.reset();
    }

    function createTask(task, index) {
        let taskIndex = index;
        const taskCard = document.createElement("div");
        taskCard.setAttribute('id', 'card');
        taskCard.setAttribute('class', 'card');
        taskCard.setAttribute('data-index', taskIndex);

        const taskCardLeft = document.createElement("div");
        taskCardLeft.setAttribute('id', 'card-left');
        const taskCardRight = document.createElement("div");
        taskCardRight.setAttribute('id', 'card-right');

        const taskLabel = document.createElement("label");
        const taskInput = document.createElement("input");
        const taskInfo = document.createElement("div");
        const deleteTask = document.createElement("button");

        taskCard.appendChild(taskCardLeft);
        taskCard.appendChild(taskCardRight);
        taskLabel.setAttribute('class', 'check-control');
        taskCardLeft.appendChild(taskLabel);

        taskInput.setAttribute('type', 'checkbox');
        taskInput.setAttribute('id', 'project-done');
        taskInput.setAttribute('name', 'project-done');
        taskCardLeft.appendChild(taskInput);

        taskInfo.setAttribute('class', 'task-heading');
        taskInfo.innerText = task.title;
        taskCardLeft.appendChild(taskInfo);

        deleteTask.setAttribute('class', 'trash-button');
        deleteTask.setAttribute('id', 'trash-button');
        deleteTask.setAttribute('type', 'button');
        deleteTask.setAttribute('data-index', taskIndex);
        taskCardRight.appendChild(deleteTask);
        cardContainer.appendChild(taskCard);

    }

    function deleteTodo(event) {
        let index = event.currentTarget.dataset.value;
        let target = event.target;
        let parent = target.parentElement;
        let cardNode = parent.parentElement;
        taskList.splice(index, 1);

        cardNode.remove();

    }

    function addListenersToTask() {
        const deleteButton = document.querySelectorAll('#trash-button');

        deleteButton.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                deleteTodo(event);
                // deleteButton.removeParent();
            });
        });
    }

    newTaskBtn.addEventListener('click', () => {
        taskForm.reset();
    })

    document.addEventListener("click", function(event) {
        if(event.target.matches("#add-new-task")) {
            addTask();
        }
    })
    modal();
}