import "./styles.css";
import { createProject } from "./projects";
import { createTodoItem } from "./todo"


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