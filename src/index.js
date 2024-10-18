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