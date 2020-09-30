class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    updateTodo(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    addNewNote(newNote) {
        this.notes.push(newNote)
    }
}

export {Todo}