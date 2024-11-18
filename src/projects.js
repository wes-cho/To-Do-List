export {createProject, addItemToProject, listOfProjects, InboxProject};

const listOfProjects = [];

class Project {
    constructor(title){
        this.title = title;
    }
};

function createProject(newProjectName){
    const newProject = new Project(newProjectName);

    let matchFound = false;

    listOfProjects.forEach(project => {
        if (project.title === newProjectName){
            matchFound = true;
        };
    });

    if (!matchFound){
        listOfProjects.push(newProject);
    } else {
        console.log("Match found, no need to add a new child object");
    };

    return newProject;
};

function addItemToProject(item, project){
    const newTodoKey = `item${Object.keys(project).length}`;
    project[newTodoKey] = item;
};

const InboxProject = createProject("Inbox");


