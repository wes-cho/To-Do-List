export { createTodoItem, internalListOfTodos};

const internalListOfTodos = [];

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

    internalListOfTodos.push(todoItem);

    return todoItem;
};