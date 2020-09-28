class Project {
    constructor(projectName, projectColor) {
        this.projectName = projectName;
        this.projectColor = projectColor;
        this.todos = []
    }

    addTodos(todoItem) {
        this.todos.push(todoItem)
    }

}

export{Project}