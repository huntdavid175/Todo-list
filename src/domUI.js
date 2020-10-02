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

// Get task values from UI 
    static getNewTodoValues() {
        const title = document.getElementById('task-name').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;

        return {
            title, description, dueDate, priority
        }

    }

// Clear input fields 
    static clearInputFields() {
        const projectName = document.getElementById('project-name').value = "";
    }


// Display projects as a list in UI
    static displayProjects(projects) {
        const projectList = document.getElementById('project-lists');
        projectList.innerHTML = ""
        projects.forEach((project, index) => UI.addProjectToList(project, index))
    }

// Creates LI tags and appends tasks to UI 
    static addProjectToList(project,index) {
        const projectList = document.getElementById('project-lists');
        // const addBeforeThis = document.getElementById('add-project').parentElement;
        const li = document.createElement('li');
            li.classList.add("project-item");
            li.innerHTML = `<a href="#" id='${index}'>${project.projectName} <span class="project-options" style="position: absolute; right: 30px; font-size: 15px; visibility: hidden; "><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></a>
            `
            projectList.appendChild(li)
    }

    // Displays project name to UI 
    static displayProjectDetails(projects, id) {
        projects.forEach((project, index) => {
            if(id == index){
                UI.addDetailsToUI(project);
            }
        })
        console.log(projects)
    }

    // Creates element and appends elements to UI 
    static addDetailsToUI(project) {
        const projectTitleLabel = document.getElementById('project-title');
        const h2 = document.createElement('h2');
        h2.classList.add('mb-4');
        h2.textContent = project.projectName;
        projectTitleLabel.innerHTML = ""
        projectTitleLabel.appendChild(h2)
        this.displayProjectTodos(project) 
    }


// Displays project todos to UI 
    static displayProjectTodos(project) {
        const listItems = document.querySelector('.list-group');
        const todoLabel = document.getElementById('add-todo');
        listItems.innerHTML = "";
        const todos = project.todos;
        todos.forEach((todo, index) => {
            const  listTag = document.createElement('a');
            listTag.classList.add("list-group-item", "list-group-item-action", "list-item", "todo-item");
            listTag.id = index;
            listTag.setAttribute('data-target', '#showTaskModal')
            listTag.innerHTML = `<input class="form-check-input position-static" type="checkbox" style="margin-left:15px; margin-right:10px;">${todo.title} <span class="options" style="position: absolute; right: 20px; visibility: hidden;"> <ion-icon name="create-outline"></ion-icon> <ion-icon name="trash-outline"></ion-icon></span>`
            // listItems.insertBefore(listTag, todoLabel)
            listItems.appendChild(listTag)
        });
    }


    // Display project task in modal 

    static displayTodoDetails(project, id) {
        const projectTodos = project.todos;
        projectTodos.forEach((todo, index) => {
            if(id == index) {
                this.createTodoUIElements(todo)
            }
        })
    }

    static createTodoUIElements(todo) {
        const modalTitle = document.querySelector('.todo-title')
        const modalDetails = document.querySelector('.todo-details')

        modalTitle.textContent = '';
        modalDetails.innerHTML = '';

        modalTitle.textContent = todo.title;
        modalDetails.innerHTML = `<p>
        ${todo.description}
        </p>
      <div class="row justify-content-between">
        <span style="color:red; padding:10px 10px 10px 0; border:1px solid #333; border-radius: 10px"><ion-icon name="calendar-outline" style="margin-left:15px; margin-right:10px"></ion-icon>${todo.dueDate}</span>
        <span style="color:red; padding:10px; border:1px solid #333; border-radius: 10px">${todo.priority}</span>
      </div>
`
    }

}

export {UI}