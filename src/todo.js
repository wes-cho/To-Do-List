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

    return todoItem;
};

// function createTodoItem(){
//     const todoItem = new Todo_item(
//         prompt("What do you want to do?"),
//         prompt("What is the due date?"),
//         prompt("Which project would you like to add this item to?"),
//         prompt("Is this high, medium, or low priority?"),
//         prompt("Anything else you want to make note of?"),
//     )

//     for (let project of listOfProjects){
//         if (todoItem.Project === project.title){
//             addItemToProject(todoItem, project);
//             break;
//         } else if (todoItem.Project === ""){
//             addItemToProject(todoItem, listOfProjects[0]);
//             break;
//         } else {
//             const newProject = createProject(todoItem.Project);
//             addItemToProject(todoItem, newProject);
//             console.log("new project created");
//             break;
//         };
//     };

//     return todoItem;
// };