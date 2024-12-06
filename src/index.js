import "./styles.css";
import { createProject, listOfProjects } from "./projects";
import { createTodoItem } from "./todo"
export {inbox};

const inbox = createProject("Inbox");
const content = document.querySelector("#main-container");
const sidebar = document.querySelector("#sidebar-nav");

// const displayProjectButton = document.createElement("button");
// displayProjectButton.textContent = "Display Inbox List";
// displayProjectButton.addEventListener("click", () => {
//     const currentProject = prompt("Which project do you want to see?");
    
//     content.replaceChildren();

//     listOfProjects.forEach(project => {
//         if (project.title === currentProject){
//             for (const key in project){
//                 if (key !== "title" && project[key].title){
//                     const item = document.createElement("p");
//                     item.textContent = project[key].title;
//                     content.appendChild(item);
//                 };
//             };
//         } else {
//             console.log("Project not found in list of projects.");
//         }
//     });
    
// });
// content.appendChild(displayInboxButton);

const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {    
    content.replaceChildren();

    for (const todoItem in inbox){
        if (todoItem != "title" && inbox[todoItem].title){
            const item = document.createElement("p");
            item.textContent = inbox[todoItem].title;
            item.addEventListener("click", () => {
                // console.log(inbox[todoItem]);
                for (const todoProperties in inbox[todoItem]){
                    // console.log(inbox[todoItem]);
                    const property = document.createElement("p");
                    property.textContent = `${todoProperties}: ${inbox[todoItem][todoProperties]}`
                    item.appendChild(property);
                };
            });
            content.appendChild(item);
        };
    };
});

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

