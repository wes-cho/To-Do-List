import { addItemToList, listOfProjects } from "./projects";
export { createTodoItem };

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

    // if (todoItem.project === ""){
    //     addItemToList(todoItem, todoItem.project);
    // } else if (todoItem.project === Object.values(todoItem.project).forEach(element => {return element})){
    //     addItemToList(todoItem, todoItem.project);
    // } else {
    //     const newProject = createProject(todoItem.project);
    //     addItemToList(todoItem, newProject);
    // };
    // need to test this;
    return todoItem;
};



