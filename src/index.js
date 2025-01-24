import "./styles.css";
import { createProject, listOfProjects } from "./projects";
import { createTodoItem } from "./todo"
export {inbox};

const inbox = createProject("Inbox");
const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar-nav");

const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {    
    content.replaceChildren();
    for (const todoItem in inbox){
        if (todoItem != "title" && inbox[todoItem].title){
            const container = document.createElement("div");
                container.setAttribute("class", "todoItemContainer");
                content.appendChild(container);
            const item = document.createElement("input");
                item.setAttribute("type", "checkbox");
                item.setAttribute("class", "checkbox");
                container.appendChild(item);
            const label = document.createElement("label");
                label.setAttribute("class", "todoItem");
                label.textContent = inbox[todoItem].title;
                container.appendChild(label);
                label.addEventListener("click", () => {
                    if (container.lastChild.className === "todoDetails"){
                        container.lastChild.remove();
                    } else {const todoDetailContainer = document.createElement("div");
                        todoDetailContainer.setAttribute("class", "todoDetails");
                        container.appendChild(todoDetailContainer);
                        for (const todoProperties in inbox[todoItem]){
                            if (todoProperties != "title"){
                                const property = document.createElement("p");
                                property.textContent = `${todoProperties}: ${inbox[todoItem][todoProperties]}`
                                todoDetailContainer.appendChild(property);
                            };
                        }};
                });
        };
    };
});

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
        high.setAttribute("value", "high");
        high.textContent = "High";
        priority.appendChild(high);
        const medium = document.createElement("option");
        medium.setAttribute("value", "medium");
        medium.textContent = "Medium";
        priority.appendChild(medium);
        const low = document.createElement("option");
        low.setAttribute("value", "low");
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


