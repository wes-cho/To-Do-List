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
            const item = document.createElement("p");
            item.textContent = inbox[todoItem].title;
            item.addEventListener("click", () => {
                for (const todoProperties in inbox[todoItem]){
                    if (todoProperties != "title"){
                        const property = document.createElement("p");
                        property.textContent = `${todoProperties}: ${inbox[todoItem][todoProperties]}`
                        item.appendChild(property);
                    };
                };
            });
            content.appendChild(item);
        };
    };
});

const modal = document.querySelector("#modal");

const plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", () => {
    modal.style.display = "block";

    const todoForm = document.createElement("div");
    todoForm.setAttribute("id", "todoForm");

    const todoTitleLabel = document.createElement("label");
    todoTitleLabel.setAttribute("for", "todoTitle");
    todoTitleLabel.textContent = "Title:"
    todoForm.appendChild(todoTitleLabel);
    const todoTitle = document.createElement("input");
    todoTitle.setAttribute("type", "text");
    todoTitle.setAttribute("id", "todoTitle");
    todoTitle.setAttribute("name", "todoTitle");
    todoForm.appendChild(todoTitle);

    modal.appendChild(todoForm);

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    };
});


// const form = document.querySelector("#form");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();

//     const formData = new FormData(form);

//     const title = formData.get("title");
//     const dueDate = formData.get("dueDate");
//     const project = formData.get("project");
//     const priority = formData.get("priority");
//     const notes = formData.get("notes");

// })

const newButton = document.querySelector("#new");
newButton.addEventListener("click", ()=> {
    const newTodoButton = document.createElement("button");
    newTodoButton.textContent = "New Todo";
    newTodoButton.addEventListener("click", () => {
        createTodoItem();
        newTodoButton.remove();
        newProjectButton.remove();
        newButton.removeAttribute('disabled');
    });
    sidebar.appendChild(newTodoButton);
    
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "New Project";
    newProjectButton.addEventListener("click", ()=> {
        const title = prompt("What do you want to title this project?")
        createProject(title);
        newTodoButton.remove();
        newProjectButton.remove();
        newButton.removeAttribute('disabled');
    })
    sidebar.appendChild(newProjectButton);
    newButton.setAttribute('disabled', '');
});

// const todoForm = document.querySelector("#todo-form");
// todoForm.addEventListener("submit", () => {
//     //insert code that creates a todo object based on form submission
// });

