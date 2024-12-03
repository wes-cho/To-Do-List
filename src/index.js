import "./styles.css";
import { createProject, listOfProjects } from "./projects";
import { createTodoItem } from "./todo"
export {inbox};

const inbox = createProject("Inbox");
const content = document.querySelector("#main-container");

const newTodoButton = document.createElement("button");
newTodoButton.textContent = "New Todo";
newTodoButton.addEventListener("click", () => {
    createTodoItem();
});
content.appendChild(newTodoButton);

const newProjectButton = document.createElement("button");
newProjectButton.textContent = "New Project";
newProjectButton.addEventListener("click", ()=> {
    const title = prompt("What do you want to title this project?")
    createProject(title);
})
content.appendChild(newProjectButton);

const displayInboxButton = document.createElement("button");
displayInboxButton.textContent = "Display Inbox List";
displayInboxButton.addEventListener("click", () => {
    const currentProject = prompt("Which project do you want to see?");
    
    projectDisplay.replaceChildren();

    listOfProjects.forEach(project => {
        if (project.title === currentProject){
            for (const key in project){
                if (key !== "title" && project[key].title){
                    const item = document.createElement("p");
                    item.textContent = project[key].title;
                    projectDisplay.appendChild(item);
                };
            };
        } else {
            console.log("Project not found in list of projects.");
        }
    });
    
});
content.appendChild(displayInboxButton);

const projectDisplay = document.createElement("div");
content.appendChild(projectDisplay);

