// import '../dist/style.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jquery from 'jquery'
import { Todo } from "./todos";
import { Project } from "./projects";
import { UI } from "./domUI";
import { Storage } from "./storage";

const addBtn = document.getElementById("add-project-btn");
const projectHolder = document.querySelector("#pageSubmenu");
let toEdit;
let highlightedProject;


// Set up a new project
addBtn.addEventListener("click", function () {
  const projectNameField = document.getElementById("project-name");
  if (projectNameField.value == "") {
    alert("Input project name");
  } else {
    // get project details
    const projectValues = UI.getNewProjectValues();
    UI.clearInputFields();

    // Add project to Storage
    const project = new Project(
      projectValues.projectName,
      projectValues.projectColor
    );
    Storage.addItem(project);

    //  Add project to UI
    const projects = Storage.getItem('projects')
  UI.displayProjects(projects);
    UI.addDetailsToUI(project);

    // set project to edit so you can edit upon new project added 
    const currentProject = Storage.getItem().length - 1
    toEdit = currentProject;
  }
});


projectHolder.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    const id = parseInt(e.target.id);
    const projects = JSON.parse(localStorage.getItem("projects"));

    UI.displayProjectDetails(projects, id);
    toEdit = id;
    console.log(id)
    setHighlightedProject(id, projects);
    // UI.displayTodoDetails(highlightedProject)
  }
});


const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', () => {
    const projects = Storage.getItem();
    // const addTodoFunc = Project.addTodos.call;
    const todoValues = UI.getNewTodoValues();
    const todo = new Todo(todoValues.title, todoValues.description, todoValues.dueDate, todoValues.priority);


    projects.forEach((project, index) => {
      if(toEdit == index) {
          Project.addTodos.call(project,todo)
          console.log(project);
          console.log(projects)
          Storage.updateStorage(projects)
          UI.displayProjectTodos(project);
          UI.displayProjects(projects)
          console.log(toEdit)
      }
  })

})


const todoTaskElementParent = document.querySelector('.list-group');
todoTaskElementParent.addEventListener('click', (e) => {
  if(e.target.tagName == 'A') {
    const id = parseInt(e.target.id);
    UI.displayTodoDetails(highlightedProject, id)
  }
})



function setHighlightedProject(id, projects) {
  projects.forEach((project, index) => {
    if(id == index) {
      highlightedProject = project;
      console.log(highlightedProject)
    }
  })
} 







// Load projects when page loads
window.addEventListener("load", () => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  UI.displayProjects(projects);
});


