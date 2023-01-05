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
            projectToDOM();
        })
    }

    function createProjectTab(project, index) {
        let projectIndex = index;

        const projectTab = document.createElement('button');
        projectTab.setAttribute('id', `${project.title}-button`);
        projectTab.innerHTML = `${project.title}`;
        projectTabs.appendChild(projectTab);

        console.log(projectTab.value);

    }

    function projectToDOM() {
        projectList.forEach((project, index) => {
            createProjectTab(project, index);
        });
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