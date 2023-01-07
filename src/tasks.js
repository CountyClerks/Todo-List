import createProject from "./projects";
import modal from "./modal";

export default function tasks() {
    const newTaskBtn = document.querySelector("#add-task");
    const taskTitle = document.querySelector("#task-name");
    const taskForm = document.querySelector("#task-form");

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
        console.log(taskList);
        createTask(task, taskIndex);
        taskForm.reset();
    }

    newTaskBtn.addEventListener("click", () => {
        addTask();
    })


    function createTask(task, index) {
        let taskIndex = index;
        const cardContent = document.querySelector("#card-content");
        const taskCard = document.createElement("div");
        taskCard.setAttribute('id', 'card');
        taskCard.setAttribute('class', 'card');
        cardContent.appendChild(taskCard);


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
        taskInfo.innerText = taskTitle.value;
        taskCardLeft.appendChild(taskInfo);

        deleteTask.setAttribute('class', 'trash-button');
        deleteTask.setAttribute('type', 'button');
        deleteTask.setAttribute('data-index', taskIndex);
        taskCardRight.appendChild(deleteTask);
    }

    modal();
}