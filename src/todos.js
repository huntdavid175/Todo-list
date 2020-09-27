class Todo {
    constructor(title, description, dueDate, priority, notes,) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [notes]
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