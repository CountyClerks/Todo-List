export default function modal() {
    const projectModal = document.querySelector(".project-modal");
    const taskModal = document.querySelector(".new-task-modal");
    const newProjectBtn = document.querySelector("#new-project-button");
    const newFooterTaskBtn = document.querySelector("#footer-add-task");
    const projectForm = document.querySelector("#project-form");
    const taskForm = document.querySelector("#task-form");


    function renderProjectModal () {
        newProjectBtn.addEventListener("click", () => {
            projectModal.style.display = "flex";
        })
        newFooterTaskBtn.addEventListener("click", () => {
            taskModal.style.display = "flex";
        })
    }

    function closeModal () {
        projectModal.style.display = "none";
        taskModal.style.display = "none";
    }

    function clearModal () {
        document.addEventListener("click", function(e) {
            if(e.target.matches("#add-project")) {
                // projectForm.reset();
                closeModal();
            }
            if(e.target.matches("#add-new-task")) {
                taskForm.reset();
                closeModal();
            }
        })
    }
    clearModal();
    renderProjectModal();
}