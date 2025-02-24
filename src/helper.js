export { dateFormatter, projectDisplay };
import { listOfProjects } from "./projects";

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

function projectDisplay(project){
    for (const todoItem in project){
            if (todoItem != "title" && project[todoItem].title){
                const container = document.createElement("div");
                    container.setAttribute("class", "todoItemContainer");
                    content.appendChild(container);
                const checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("class", "checkbox");
                    container.appendChild(checkbox);
                    checkbox.addEventListener("click", () => {
                        delete project[todoItem];
                        container.remove();
                        line.remove();
                        console.log(project)
                    });
                const label = document.createElement("label");
                    label.setAttribute("class", "todoItem");
                    label.textContent = project[todoItem].title;
                    container.appendChild(label);
                    label.addEventListener("click", () => {
                        if (container.lastChild.className === "todoDetails"){
                            container.lastChild.remove();
                        } else {const todoDetailContainer = document.createElement("div");
                            todoDetailContainer.setAttribute("class", "todoDetails");
                            container.appendChild(todoDetailContainer);
                            for (const todoProperties in project[todoItem]){
                                if (todoProperties != "title"){
                                    const property = document.createElement("p");
                                    const boldText = document.createElement("strong");
                                    boldText.textContent = `${todoProperties}: `;
                                    property.appendChild(boldText);
                                    property.appendChild(document.createTextNode(project[todoItem][todoProperties]));
                                    if (todoProperties === "Project"){
                                        property.addEventListener("click", () => {
                                            const newProject = prompt("What project would you like to move this item to?");
                                            if (listOfProjects.some(project => project.title === newProject)){
                                                // change the project value of the todo item
                                                project[todoItem].Project = newProject;
                                                // add the todo item to the new project
                                                const newProjectObject = listOfProjects.find(project => project.title === newProject);
                                                newProjectObject[todoItem] = project[todoItem];
                                                // remove the todo item from the old project
                                                delete project[todoItem];
                                            } else {
                                                alert("Project does not exist");
                                            };
                                        });
                                    } else {
                                        //create different event listeners depending on the todo property
                                    }
                                    
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
}