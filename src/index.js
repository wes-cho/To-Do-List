import "./styles.css";
import { createProject, listOfProjects } from "./projects";
import { createTodoItem } from "./todo"
export {inbox};

const inbox = createProject("Inbox");
const content = document.querySelector("#main-container");
const sidebar = document.querySelector("#sidebar-nav");

// const displayInboxButton = document.createElement("button");
// displayInboxButton.textContent = "Display Inbox List";
// displayInboxButton.addEventListener("click", () => {
//     const currentProject = prompt("Which project do you want to see?");
    
//     projectDisplay.replaceChildren();

//     listOfProjects.forEach(project => {
//         if (project.title === currentProject){
//             for (const key in project){
//                 if (key !== "title" && project[key].title){
//                     const item = document.createElement("p");
//                     item.textContent = project[key].title;
//                     projectDisplay.appendChild(item);
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

    for (const key in inbox){
        if (key != "title" && inbox[key].title){
            const item = document.createElement("p");
            item.textContent = inbox[key].title;
            content.appendChild(item);
        };
    };
});

// const projectDisplay = document.createElement("div");
// content.appendChild(projectDisplay);


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
    newButton.setAttribute('disabled', '')
})

