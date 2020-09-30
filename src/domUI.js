import Storage from './storage';
import Projects, { Project } from './projects'

class UI {
    static getNewProjectValues() {
        const projectName = document.getElementById('project-name').value;
        const projectColor = document.getElementById('color-selector').value;

        return {
            projectName, projectColor
        }
    }

    static getNewTodoValues() {
        const title = document.getElementById('task-name').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;

        return {
            title, description, dueDate, priority
        }

    }

    static clearInputFields() {
        const projectName = document.getElementById('project-name').value = "";
    }

    static displayProjects(projects) {
        projects.forEach((project, index) => UI.addProjectToList(project, index))
    }

    static addProjectToList(project,index) {
        const projectList = document.getElementById('pageSubmenu');
        const addBeforeThis = document.getElementById('add-project').parentElement;
        const li = document.createElement('li');
            li.classList.add("project-item")
            li.innerHTML = `<a href="#" id='${index}'>${project.projectName} <span class="project-options" style="position: absolute; right: 30px; font-size: 15px; visibility: hidden; "><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></a>
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
        const projectTitleLabel = document.getElementById('project-title');
        const h2 = document.createElement('h2');
        h2.classList.add('mb-4');
        h2.textContent = project.projectName;
        projectTitleLabel.innerHTML = ""
        projectTitleLabel.appendChild(h2)
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
        });
    }

    static addTaskToProject(id, projects, newTodo, addTodoFunc) {
        projects.forEach((project, index) => {
            if(id == index) {
                Project.addTodos.call(project,newTodo)
                console.log(project)
            }
        })
    }
}

export {UI}