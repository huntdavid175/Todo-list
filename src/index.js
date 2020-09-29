// import '../dist/style.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Todo} from './todos';
import {Project} from './projects';
import {UI} from './domUI';
import {Storage} from './storage';


const addBtn = document.getElementById('add-project-btn');
const projectHolder = document.querySelector('#pageSubmenu');



// Set up a new project 
addBtn.addEventListener('click', function() {
    const projectNameField = document.getElementById('project-name');
    if(projectNameField.value == '') {
        alert("Input project name")
    } 
    else {
        // get project details 
     const projectValues = UI.getNewProjectValues();
     UI.clearInputFields()
 
     // Add project to Storage 
     const project = new Project(projectValues.projectName, projectValues.projectColor);
     Storage.addItem(project)

    //  Add project to UI 
    UI.addProjectToList(project);
    UI.addDetailsToUI(project);
    }

    
    
});

projectHolder.addEventListener('click', (e) => {
    if(e.target.tagName == "A") {
        const id = parseInt(e.target.id);
        const projects = JSON.parse(localStorage.getItem('projects'));

        UI.displayProjectDetails(projects, id)
    }
})

// const projects = JSON.parse(localStorage.getItem('projects'));
// const todo = new Todo('Scuba diving')
// let project1 =  projects[0];
// Project.addTodos.call(project1, todo)
// console.log(project1)

// UI.displayProjectDetails(projects,0)

// Load projects when page loads 
window.addEventListener('load', () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    UI.displayProjects(projects)
})












