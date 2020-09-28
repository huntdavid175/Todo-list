class UI {
    static getNewProjectValues() {
        const projectName = document.getElementById('project-name').value;
        const projectColor = document.getElementById('color-selector').value;

        return {
            projectName, projectColor
        }
    }

    static clearInputFields() {
        const projectName = document.getElementById('project-name').value = "";
    }

    static displayProjects(projects) {
        projects.forEach((project) => UI.addProjectToList(project))
    }

    static addProjectToList(project) {
        const projectList = document.getElementById('pageSubmenu');
        const addBeforeThis = document.getElementById('add-project').parentElement;
        const li = document.createElement('li');
            li.classList.add("project-item")
            li.innerHTML = `<a href="#">${project.projectName} <span class="project-options" style="position: absolute; right: 30px; font-size: 15px; visibility: hidden; "><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></a>
            `
            projectList.insertBefore(li, addBeforeThis)
    }

}

export {UI}