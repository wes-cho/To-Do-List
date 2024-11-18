import { addItemToProject, listOfProjects, createProject, InboxProject } from "./projects";
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

    console.log(InboxProject);
    return todoItem;
};

function displayProject(){
    for (const key in InboxProject){
        if (key !== "title" && InboxProject[key].title){
            content.replaceChildren;
            const item = document.createElement("p");
            item.textContent = InboxProject[key].title;
            content.appendChild(item);
        };
    };
};
