export { createTodoItem };
// import { createProject, addItemToList, listOfProjects } from "./projects";

class Todo_item{
    constructor(title, dueDate, list, priority, notes){
        this.title = title;
        this.date = dueDate;
        this.list = list;
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
    
    // if (todoItem.list === ""){
    //     defaultProject.push(todoItem);
    // } else if (todoItem.list === listOfProjects.forEach(element => {return element})){
    //     addItemToList(todoItem, todoItem.list);
    //     console.log(todoItem.list);
    // } else {
    //     const newProject = createProject(todoItem.list);
    //     addItemToList(todoItem, newProject);
    // };
    //need to test this;
    return todoItem;
};

