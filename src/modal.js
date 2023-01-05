export default function modal() {


    const projectModal = document.querySelector(".project-modal");
    const taskModal = document.querySelector(".new-task-modal");
    const newProjectBtn = document.querySelector("#new-project-button");
    const newTaskBtn = document.querySelector("#add-task");

    function renderProjectModal () {
        newProjectBtn.addEventListener("click", () => {
            projectModal.style.display = "flex";
        })
        newTaskBtn.addEventListener("click", () => {
            taskModal.style.display = "flex";
        })
    }
    renderProjectModal();
}