import "./styles.css";
import { createProject } from "./projects";
import { createTodoItem, displayProject } from "./todo"
export { content };


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
    displayProject();
})
content.appendChild(displayInboxButton);

