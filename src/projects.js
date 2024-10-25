export {createProject, addItemToList, listOfProjects};

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
        console.log(listOfProjects[0]);
    } else {
        console.log("Match found, no need to add a new child object");
    };
};

function addItemToList(item, list){
    const newTodoKey = `item${Object.keys(list).length+1}`;
    list[newTodoKey] = item;
};

createProject("defaultProject");


