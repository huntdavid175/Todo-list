// import '../dist/style.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Todo} from './todos';
import {Project} from './projects';
import {UI} from './domUI';
import {Storage} from './storage';


const addBtn = document.getElementById('add-project-btn');


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
    }
    
});


let projects = JSON.parse(localStorage.getItem('projects'));

UI.displayProjects(projects)









