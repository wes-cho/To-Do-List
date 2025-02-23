import { addItemToProject, listOfProjects } from "./projects";
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
            return todoItem;
        } else if (todoItem.Project === ""){
            todoItem.Project = "Inbox";
            addItemToProject(todoItem, listOfProjects[0]);
            return todoItem;
        } else if (todoItem.Project != project.title){
            continue;
        } else {
            alert("Error: Project not found");
        }
    };
};