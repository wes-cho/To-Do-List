export {createTodoItem};

class Todo_item{
    constructor(title, dueDate, priority, notes){
        this.title = title;
        this.date = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

function createTodoItem(){
    const todoItem = new Todo_item(
        prompt("What do you want to do?"),
        prompt("What is the due date?"),
        prompt("Is this high, medium, or low priority?"),
        prompt("Anything else you want to make note of?")
    )
    console.log(todoItem);
}

