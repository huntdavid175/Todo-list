class UI {
    static getNewProjectValues() {
        const projectName = document.getElementById('project-name').value;
        const projectColor = document.getElementById('color-selector').value;

        return {
            projectName, projectColor
        }
    }

    static clearInputFields() {
        const projectName = document.getElementById('project-name').value = "";
        const projectColor = document.getElementById('color-selector').value = "";
    }

}

export {UI}