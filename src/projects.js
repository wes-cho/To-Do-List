export {listOfProjects, createProject, addItemToProject, removeItemFromProject, displayProject};

const listOfProjects = [];

function createProject(project){
    const projectName = [];
    listOfProjects.push(project);

    return project;
};

function addItemToProject(project, item){
    project.push(item);
};

function removeItemFromProject(project, index){
    project.slice(index, 1);
};

function displayProject(projectArray){
    projectArray.forEach(project => {
        console.log(project);
    });
};