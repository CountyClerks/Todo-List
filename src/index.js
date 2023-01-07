import createProject from "./projects";
import tasks from "./tasks";


    // function deleteTodo() {
    //     let myCardContent = targetTodo(this);
    //     (myCardContent.parentNode).removeChild(myCardContent);

    //     let todoID = getTodoID(this);

    //     let currentTodo = findTodo(todoID);

    //     for(let i = tasks.taskList.length -1; i >= 0; i--) {
    //         if(tasks.taskList[i].id == currentTodo.id) {
    //             tasks.taskList.splice(i, 1);
    //         }
    //     }

    // }

    // function getTodoID(element) {
    //     if(element.classList.contains('trash-button')) {
    //         let cardLeft = element.parentNode;
    //         let card = cardLeft.element.parentNode;
    //         let todoID = Number((card.id).substring(4));

    //         return todoID
    //     }
    // }

 
    // function findTodo(todoID) {
    //     let currentTodo = tasks.taskList.find((object) => {
    //         return object.id == todoID;
    //     });

    //     return currentTodo;
    // }

    // function targetTodo(element) {
    //     if(element.classList.contains('trash-button')) {

    //         let cardLeft = element.parentNode;
    //         let card = cardLeft.parentNode;
    //         return card;
    //     }
    // }
createProject();
tasks();