class Storage {
    static getItem() {
        let projects;
        if(localStorage.getItem('projects') === null) {
            projects = []
        }
        else {
          projects = JSON.parse(localStorage.getItem(('projects')))
        }
        return projects
    }

    static addItem(project) {
        const projects = Storage.getItem();
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects))

    }
}

export {Storage}