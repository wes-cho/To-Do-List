import { addItemToProject, listOfProjects, createProject } from "./projects";
import { inbox } from "./index.js";
export { createTodoItem };

class Todo_item{
    constructor(title, dueDate, project, priority, notes){
        this.title = title;
        this.Date = dueDate;
        this.Project = project;
        this.Priority = priority;
        this.Notes = notes;
    };
};

function createTodoItem(title,dueDate, project, priority, notes){
    const todoItem = new Todo_item(
        title = title,
        dueDate = dueDate,
        project = project,
        priority = priority,
        notes = notes,
    );

    for (let project of listOfProjects){
        if (todoItem.Project === project.title){
            addItemToProject(todoItem, project);
            break;
        } else if (todoItem.Project === ""){
            todoItem.Project = "Inbox";
            addItemToProject(todoItem, listOfProjects[0]);
            break;
        } else {
            alert("That project does not exist. Please create project first.")
            break;
        };
    };

    return todoItem;
};