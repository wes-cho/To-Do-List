export {createProject, addItemToList, listOfProjects};

const listOfProjects = {};

class Project {
    constructor(title){
        this.title = title;
    }
};

function createProject(newProjectName){
    const newProject = new Project(newProjectName);

    let matchFound = false;
    Object.values(listOfProjects).forEach(project => {
        if (project.title === newProjectName){
            matchFound = true;
        };
    });

    // creates new project with dynamic key if no match is found in listOfProjects
    if (!matchFound){
        const newProjectKey = `item${Object.keys(listOfProjects).length+1}`;
        listOfProjects[newProjectKey] = {
            title: newProjectName,
        };
        console.log(`New child object added as ${newProjectKey}:`, listOfProjects[newProjectKey])
        console.log(listOfProjects);
    } else {
        console.log("Match found, no need to add a new child object");
        console.log(listOfProjects);
    };
};

function addItemToList(item, list){
    list.push(item);
};

createProject("defaultProject");


