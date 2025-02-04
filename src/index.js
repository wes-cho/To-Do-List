import "./styles.css";
import { createTodoItem, internalListOfTodos} from "./todo";

const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar-nav");

const todoTest = createTodoItem("Test", "2024-12-31", "Inbox", "High", "This is a test todo item");
const todayTest = createTodoItem("Today's Task", "2025-02-03", "", "Medium", "This is a test todo item for today");
const tomorrowTest = createTodoItem("Tomorrow's Task", "2025-02-04", "", "Low", "This is a test todo item for tomorrow");
const somedayTest = createTodoItem("Someday Task", "2026-03-01", "", "High", "This is a test todo item for someday");

function dateFormatter(dateInstance){
    const date = new Date(dateInstance);
    const year = date.getFullYear();
    var month = date.getMonth()+1;    
    var day = date.getDate();

    if (month < 10 && day < 10){
        month = `0${month}`;
        day = `0${day}`;

        return `${year}-${month}-${day}`;

    } else if (month < 10 && day > 10){
        month = `0${month}`;

        return `${year}-${month}-${day}`;

    } else if (month > 10 && day < 10){
        day = `0${day}`;

        return `${year}-${month}-${day}`;
    } else {
        return `${year}-${month}-${day}`
    };
};

const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {    
    content.replaceChildren();
    for (let todoItem = 0; todoItem<internalListOfTodos.length; todoItem++){
        if (internalListOfTodos[todoItem] != "title" && internalListOfTodos[todoItem].title){
            const container = document.createElement("div");
                container.setAttribute("class", "todoItemContainer");
                content.appendChild(container);
            const item = document.createElement("input");
                item.setAttribute("type", "checkbox");
                item.setAttribute("class", "checkbox");
                container.appendChild(item);
            const label = document.createElement("label");
                label.setAttribute("class", "todoItem");
                label.textContent = internalListOfTodos[todoItem].title;
                container.appendChild(label);
                label.addEventListener("click", () => {
                    if (container.lastChild.className === "todoDetails"){
                        container.lastChild.remove();
                    } else {const todoDetailContainer = document.createElement("div");
                        todoDetailContainer.setAttribute("class", "todoDetails");
                        container.appendChild(todoDetailContainer);
                        for (const todoProperties in internalListOfTodos[todoItem]){
                            if (todoProperties != "title"){
                                const property = document.createElement("p");
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(internalListOfTodos[todoItem][todoProperties]));
                                // setting a class to be able to style the Notes section
                                if (todoProperties === "Notes"){
                                    property.setAttribute("class", todoProperties);
                                };
                                todoDetailContainer.appendChild(property);
                            };
                        }};
                });
            const line = document.createElement("hr");
                content.appendChild(line);
        };
    };
});

const todayButton = document.querySelector("#today");
todayButton.addEventListener("click", () => {
    content.replaceChildren();
    for (let todoItem = 0; todoItem<internalListOfTodos.length; todoItem++){
        if (internalListOfTodos[todoItem] != "title" && internalListOfTodos[todoItem].Date === new Date().toJSON().slice(0,10)){
            const container = document.createElement("div");
                container.setAttribute("class", "todoItemContainer");
                content.appendChild(container);
            const item = document.createElement("input");
                item.setAttribute("type", "checkbox");
                item.setAttribute("class", "checkbox");
                container.appendChild(item);
            const label = document.createElement("label");
                label.setAttribute("class", "todoItem");
                label.textContent = internalListOfTodos[todoItem].title;
                container.appendChild(label);
                label.addEventListener("click", () => {
                    if (container.lastChild.className === "todoDetails"){
                        container.lastChild.remove();
                    } else {const todoDetailContainer = document.createElement("div");
                        todoDetailContainer.setAttribute("class", "todoDetails");
                        container.appendChild(todoDetailContainer);
                        for (const todoProperties in internalListOfTodos[todoItem]){
                            if (todoProperties != "title"){
                                const property = document.createElement("p");
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(internalListOfTodos[todoItem][todoProperties]));
                                if (todoProperties === "Notes"){
                                    property.setAttribute("class", todoProperties);
                                };
                                todoDetailContainer.appendChild(property);
                            };
                        }};
                });
            const line = document.createElement("hr");
                content.appendChild(line);
        };
    }
});

const tomorrowButton = document.querySelector("#tomorrow");
tomorrowButton.addEventListener("click", () => {
    content.replaceChildren();
    for (let todoItem = 0; todoItem<internalListOfTodos.length; todoItem++){
        if (internalListOfTodos[todoItem] != "title" && internalListOfTodos[todoItem].Date === new Date(new Date().setDate(new Date().getDate() +1)).toJSON().slice(0,10)){
            const container = document.createElement("div");
                container.setAttribute("class", "todoItemContainer");
                content.appendChild(container);
            const item = document.createElement("input");
                item.setAttribute("type", "checkbox");
                item.setAttribute("class", "checkbox");
                container.appendChild(item);
            const label = document.createElement("label");
                label.setAttribute("class", "todoItem");
                label.textContent = internalListOfTodos[todoItem].title;
                container.appendChild(label);
                label.addEventListener("click", () => {
                    if (container.lastChild.className === "todoDetails"){
                        container.lastChild.remove();
                    } else {const todoDetailContainer = document.createElement("div");
                        todoDetailContainer.setAttribute("class", "todoDetails");
                        container.appendChild(todoDetailContainer);
                        for (const todoProperties in internalListOfTodos[todoItem]){
                            if (todoProperties != "title"){
                                const property = document.createElement("p");
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(internalListOfTodos[todoItem][todoProperties]));
                                if (todoProperties === "Notes"){
                                    property.setAttribute("class", todoProperties);
                                };
                                todoDetailContainer.appendChild(property);
                            };
                        }};
                });
            const line = document.createElement("hr");
                content.appendChild(line);
        };
}});

const somedayButton = document.querySelector("#someday");
somedayButton.addEventListener("click", () => {
    content.replaceChildren();
    for (let todoItem = 0; todoItem<internalListOfTodos.length; todoItem++){
        if (internalListOfTodos[todoItem] != "title" && internalListOfTodos[todoItem].Date > new Date(new Date().setHours(new Date().getDate() +1)).toJSON().slice(0,10)){
            const container = document.createElement("div");
                container.setAttribute("class", "todoItemContainer");
                content.appendChild(container);
            const item = document.createElement("input");
                item.setAttribute("type", "checkbox");
                item.setAttribute("class", "checkbox");
                container.appendChild(item);
            const label = document.createElement("label");
                label.setAttribute("class", "todoItem");
                label.textContent = internalListOfTodos[todoItem].title;
                container.appendChild(label);
                label.addEventListener("click", () => {
                    if (container.lastChild.className === "todoDetails"){
                        container.lastChild.remove();
                    } else {const todoDetailContainer = document.createElement("div");
                        todoDetailContainer.setAttribute("class", "todoDetails");
                        container.appendChild(todoDetailContainer);
                        for (const todoProperties in internalListOfTodos[todoItem]){
                            if (todoProperties != "title"){
                                const property = document.createElement("p");
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(internalListOfTodos[todoItem][todoProperties]));
                                if (todoProperties === "Notes"){
                                    property.setAttribute("class", todoProperties);
                                };
                                todoDetailContainer.appendChild(property);
                            };
                        }};
                });
            const line = document.createElement("hr");
                content.appendChild(line);
    };
}});

const modal = document.querySelector("#modal");

const plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", () => {
    modal.style.display = "block";

    const todoForm = document.createElement("div");
    todoForm.setAttribute("id", "todoForm");
    modal.appendChild(todoForm);

    const todoTitle = document.createElement("input");
        todoTitle.setAttribute("type", "text");
        todoTitle.setAttribute("id", "todoTitle");
        todoTitle.setAttribute("name", "todoTitle");
        todoTitle.setAttribute("class", "todoInput");
        todoTitle.setAttribute("placeholder", "Task Title");
        todoForm.appendChild(todoTitle);
    const br1 = document.createElement("br");
        todoForm.appendChild(br1);

    const notes = document.createElement("textarea");
        notes.setAttribute("id", "notes");
        notes.setAttribute("name", "notes");
        notes.setAttribute("placeholder", "Task Notes");
        notes.setAttribute("rows", "5");
        notes.setAttribute("cols", "50");
        notes.setAttribute("class", "todoInput");
        todoForm.appendChild(notes);
    const br2 = document.createElement("br");
        todoForm.appendChild(br2);

    const dueDateLabel = document.createElement("label");
        dueDateLabel.setAttribute("for", "dueDate");
        dueDateLabel.setAttribute("id", "dueDateLabel");
        dueDateLabel.textContent = "Due Date:";
        todoForm.appendChild(dueDateLabel);
        const dueDate = document.createElement("input");
        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("id", "dueDate");
        dueDate.setAttribute("name", "dueDate");
        dueDate.setAttribute("class", "todoInput");
        todoForm.appendChild(dueDate);
    const br3 = document.createElement("br");
        todoForm.appendChild(br3);

    const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "priority");
        priorityLabel.setAttribute("id", "priorityLabel");
        priorityLabel.textContent = "Priority:";
        todoForm.appendChild(priorityLabel);
        const priority = document.createElement("select");
        priority.setAttribute("id", "priority");
        priority.setAttribute("name", "priority");
        priority.setAttribute("class", "todoInput");
        const high = document.createElement("option");
        high.setAttribute("value", "High");
        high.textContent = "High";
        priority.appendChild(high);
        const medium = document.createElement("option");
        medium.setAttribute("value", "Medium");
        medium.textContent = "Medium";
        priority.appendChild(medium);
        const low = document.createElement("option");
        low.setAttribute("value", "Low");
        low.textContent = "Low";
        priority.appendChild(low);
        todoForm.appendChild(priority);
    const br4 = document.createElement("br");
        todoForm.appendChild(br4);

    const projectLabel = document.createElement("label");
        projectLabel.setAttribute("for", "project");
        projectLabel.setAttribute("id", "projectLabel");
        projectLabel.textContent = "Project:";
        todoForm.appendChild(projectLabel);
        const project = document.createElement("input");
        project.setAttribute("type", "text");
        project.setAttribute("id", "project");
        project.setAttribute("name", "project");
        todoForm.appendChild(project);
    const br5 = document.createElement("br");
        todoForm.appendChild(br5);

    const submit = document.createElement("button");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    todoForm.appendChild(submit);
    submit.addEventListener("click", () => {
        const newTodo = createTodoItem(todoTitle.value, dueDate.value, project.value, priority.value, notes.value);
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    };
});

// const newButton = document.querySelector("#new");
// newButton.addEventListener("click", ()=> {
//     const newTodoButton = document.createElement("button");
//     newTodoButton.textContent = "New Todo";
//     newTodoButton.addEventListener("click", () => {
//         createTodoItem();
//         newTodoButton.remove();
//         newProjectButton.remove();
//         newButton.removeAttribute('disabled');
//     });
//     sidebar.appendChild(newTodoButton);
    
//     const newProjectButton = document.createElement("button");
//     newProjectButton.textContent = "New Project";
//     newProjectButton.addEventListener("click", ()=> {
//         const title = prompt("What do you want to title this project?")
//         createProject(title);
//         newTodoButton.remove();
//         newProjectButton.remove();
//         newButton.removeAttribute('disabled');
//     })
//     sidebar.appendChild(newProjectButton);
//     newButton.setAttribute('disabled', '');
// });


