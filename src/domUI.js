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

    static displayProjectDetails(projects, id) {
        projects.forEach((project, index) => {
            if(id == index){
                UI.addDetailsToUI(project);
            }
        })
        console.log(projects)
    }

    static addDetailsToUI(project) {
        const content = document.getElementById('content');
        const row = document.querySelector(".row")
        const h4 = document.createElement('h4');
        h4.classList.add('mb-4');
        h4.textContent = project.projectName;
        content.insertBefore(h4, row)
        this.displayProjectTodos(project) 
    }

    static displayProjectTodos(project) {
        const listItems = document.querySelector('.list-group');
        const todoLabel = document.getElementById('add-todo');
        const todos = project.todos;
        todos.forEach((todo, index) => {
            const  listTag = document.createElement('a');
            listTag.classList.add("list-group-item", "list-group-item-action", "list-item");
            listTag.innerHTML = `<input class="form-check-input position-static" type="checkbox" style="margin-left:15px; margin-right:10px;">${todo} <span class="options" style="position: absolute; right: 20px; visibility: hidden;"> <ion-icon name="create-outline"></ion-icon> <ion-icon name="trash-outline"></ion-icon></span>`
            listItems.insertBefore(listTag, todoLabel)
        })
    }
}

export {UI}