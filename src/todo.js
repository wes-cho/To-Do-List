import { addItemToProject, listOfProjects, createProject } from "./projects";
import { content } from "./index";
export { createTodoItem, displayProject };

class Todo_item{
    constructor(title, dueDate, project, priority, notes){
        this.title = title;
        this.date = dueDate;
        this.project = project;
        this.priority = priority;
        this.notes = notes;
    }
}

function createTodoItem(){
    const todoItem = new Todo_item(
        prompt("What do you want to do?"),
        prompt("What is the due date?"),
        prompt("Which project would you like to add this item to?"),
        prompt("Is this high, medium, or low priority?"),
        prompt("Anything else you want to make note of?"),
    )

    for (let project of listOfProjects){
        if (todoItem.project === project.title){
            addItemToProject(todoItem, project);
            break;
        } else if (todoItem.project === ""){
            addItemToProject(todoItem, listOfProjects[0]);
            break;
        } else {
            const newProject = createProject(todoItem.project);
            addItemToProject(todoItem, newProject);
            console.log("new project created");
            break;
        };
    };

    return todoItem;
};

function displayProject(projectString){
    
    listOfProjects.forEach(project => {
        if (project.title === projectString){
            for (const key in project){
                if (key !== "title" && project[key].title){
                    const projectDisplay = document.createElement("div");
                    content.appendChild(projectDisplay);
                    projectDisplay.replaceChildren();
                    const item = document.createElement("p");
                    item.textContent = project[key].title;
                    projectDisplay.appendChild(item);
                };
            };
        } else {
            console.log("Project not found in list of projects.");
        }
    });

    
};
