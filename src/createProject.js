export default function createProject() {

    const newProjectBtn = document.querySelector("#new-project-button");
    const addProjectBtn = document.querySelector("#add-project");
    const projectForm = document.querySelector("#project-form");
    const projectModal = document.querySelector(".project-modal");
    const projectTabs = document.querySelector("#project-tabs");
    const projectTitle = document.querySelector("#project-name");

    let projectList = [];

    function Project(title, index) {
        this.title = title;
        this.index = index;
    }

    function renderProjectModal () {
        newProjectBtn.addEventListener("click", () => {
            projectModal.style.display = "flex";
        })
    }

    function addProject () {
        addProjectBtn.addEventListener("click", () => {
            let projectIndex = projectList.length;
            let project = new Project (
                projectTitle.value,
                projectIndex
            );
            projectList.push(project);
            console.log(projectList);
            createProjectTab();
            projectForm.reset();
        })
    }

    function createProjectTab(project) {
        const projectTab = document.createElement('button');
        projectTab.setAttribute('id', `${projectTitle.value}-button`);
        projectTab.innerHTML = `${projectTitle.value}`
        projectTabs.appendChild(projectTab);
    }

    function closeModal() {
        projectModal.style.display = "none";
    }

    function clearModal() {
        document.addEventListener("click", function(e) {
            if(e.target.matches("#add-project")) {
                // addProjectTab();
                projectForm.reset();
                closeModal();
            }
        })
    }
    clearModal();
    addProject();
    renderProjectModal();
}