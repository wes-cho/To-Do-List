import "./styles.css";
import { createProject, listOfProjects } from "./projects";
import { createTodoItem } from "./todo";
import { dateFormatter } from "./helper";
export {inbox};

const inbox = createProject("Inbox");
const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar-nav");
const mainTitle = document.querySelector("#main-title");

const todoTest = createTodoItem("Test", "2024-12-31", "Inbox", "High", "This is a test todo item");
const todayTest = createTodoItem("Today's Task", dateFormatter(new Date()), "", "Medium", "This is a test todo item for today");
const tomorrowTest = createTodoItem("Tomorrow's Task", dateFormatter(new Date(new Date().setDate(new Date().getDate() +1))), "", "Low", "This is a test todo item for tomorrow");
const somedayTest = createTodoItem("Someday Task", "2026-03-01", "", "High", "This is a test todo item for someday");

const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {    
    content.replaceChildren();
    mainTitle.textContent = "Inbox";
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
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(inbox[todoItem][todoProperties]));
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
    mainTitle.textContent = "Today";
    for (const todoItem in inbox){
        if (todoItem != "title" && inbox[todoItem].Date === dateFormatter(new Date())){
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
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(inbox[todoItem][todoProperties]));
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
    mainTitle.textContent = "Tomorrow";
    for (const todoItem in inbox){
        if (todoItem != "title" && inbox[todoItem].Date === dateFormatter(new Date(new Date().setDate(new Date().getDate() +1)))){
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
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(inbox[todoItem][todoProperties]));
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
    mainTitle.textContent = "Someday";
    for (const todoItem in inbox){
        if (todoItem != "title" && inbox[todoItem].Date > dateFormatter(new Date(new Date().setDate(new Date().getDate() +1)))){
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
                                const boldText = document.createElement("strong");
                                boldText.textContent = `${todoProperties}: `;
                                property.appendChild(boldText);
                                property.appendChild(document.createTextNode(inbox[todoItem][todoProperties]));
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

const addProjectButton = document.querySelector("#new");
addProjectButton.addEventListener("click", ()=> {
    modal.style.display = "block";
    modal.replaceChildren();

    const newProjectForm = document.createElement("div");
    newProjectForm.setAttribute("id", "newProjectForm");
    modal.appendChild(newProjectForm);

    const projectName = document.createElement("input");
    projectName.setAttribute("type", "text");
    projectName.setAttribute("id", "projectName");
    projectName.setAttribute("name", "projectName");
    projectName.setAttribute("class", "todoInput");
    projectName.setAttribute("placeholder", "Project Name");
    newProjectForm.appendChild(projectName);
    const br1 = document.createElement("br");
        newProjectForm.appendChild(br1);

    const submit = document.createElement("button");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    newProjectForm.appendChild(submit);
    submit.addEventListener("click", () => {
        if (listOfProjects.some(project => project.title === projectName.value)){
            alert("Project already exists");
            console.log(listOfProjects);
        } else {
            const newProjectName = projectName.value;
            const newProjectObject = createProject(newProjectName);
            const newProjectButton = document.createElement("button");
            newProjectButton.setAttribute("id", newProjectName);
            newProjectButton.setAttribute("class", "sidebar-button");
            newProjectButton.textContent = newProjectName;
            newProjectButton.addEventListener("click", () => {
                content.replaceChildren();
                mainTitle.textContent = newProjectName;
                for (const todoItem in newProjectObject){
                    if (todoItem != "title" && newProjectObject[todoItem].title){
                        const container = document.createElement("div");
                            container.setAttribute("class", "todoItemContainer");
                            content.appendChild(container);
                        const checkbox = document.createElement("input");
                            checkbox.setAttribute("type", "checkbox");
                            checkbox.setAttribute("class", "checkbox");
                            container.appendChild(item);
                        const label = document.createElement("label");
                            label.setAttribute("class", "todoItem");
                            label.textContent = newProjectObject[todoItem].title;
                            container.appendChild(label);
                            label.addEventListener("click", () => {
                                if (container.lastChild.className === "todoDetails"){
                                    container.lastChild.remove();
                                } else {const todoDetailContainer = document.createElement("div");
                                    todoDetailContainer.setAttribute("class", "todoDetails");
                                    container.appendChild(todoDetailContainer);
                                    for (const todoProperties in newProjectObject[todoItem]){
                                        if (todoProperties != "title"){
                                            const property = document.createElement("p");
                                            const boldText = document.createElement("strong");
                                            boldText.textContent = `${todoProperties}: `;
                                            property.appendChild(boldText);
                                            property.appendChild(document.createTextNode(newProjectObject[todoItem][todoProperties]));
                                            property.addEventListener("click", () => {
                                                const newProject = prompt("What project would you like to move this item to?");
                                                if (listOfProjects.includes(newProject)){
                                                    newProjectObject[todoItem].Project = newProject;
                                                } else {
                                                    alert("Project does not exist");
                                                };
                                            });
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
            sidebar.appendChild(newProjectButton);

            modal.style.display = "none";
        };
    });

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    };
});

const newTodoButton = document.querySelector("#plus");
newTodoButton.addEventListener("click", () => {
    modal.style.display = "block";
    modal.replaceChildren();

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
        if(createTodoItem(todoTitle.value, dueDate.value, project.value, priority.value, notes.value)){
            alert("Task added successfully");
        } else{
            alert("Project does not exist");
        };
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    };
});

