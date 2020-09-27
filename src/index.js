// import '../dist/style.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Todo} from './todos';
import {Project} from './projects';
import {UI} from './domUI';

let todo = new Todo("NodeJs", "Learn Node on Youtube", "March", "high", "becareful");
let tod = new Todo("Ruby on Rails", "The Odin Project", "september", "medium", "You're special");
console.log(todo)


let project = new Project('Coding related stuff', 'Black');
// console.log(project);

project.addTodos(todo);
// console.log(project)
project.addTodos(tod);
// console.log(project)

todo.updateTodo("Python", 'Takyi Plaza', 'July')
console.log(todo)

todo.addNewNote('Werka')
console.log(todo);

const addBtn = document.getElementById('add-project-btn');

addBtn.addEventListener('click', function() {
    console.log(UI.getNewProjectValues());
    UI.clearInputFields()
    // console.log("Hello")
});







