export { dateFormatter, projectDisplay };
import { listOfProjects } from "./projects";

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

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

function projectDisplay(item, project){
    const container = document.createElement("div");
        container.setAttribute("class", "todoItemContainer");
        content.appendChild(container);
    const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        container.appendChild(checkbox);
        checkbox.addEventListener("click", () => {
            delete project[item];
            container.remove();
            line.remove();
            console.log(project)
        });
    const label = document.createElement("label");
        label.setAttribute("class", "todoItem");
        label.textContent = project[item].title;
        container.appendChild(label);
        label.addEventListener("click", () => {
            if (container.lastChild.className === "todoDetails"){
                container.lastChild.remove();
            } else {const todoDetailContainer = document.createElement("div");
                todoDetailContainer.setAttribute("class", "todoDetails");
                container.appendChild(todoDetailContainer);
                for (const todoProperties in project[item]){
                    if (todoProperties != "title"){
                        const property = document.createElement("strong");
                        const propertyValue = document.createElement("p");
                        property.textContent = `${todoProperties}: `;
                        //class set just for the hover effect
                        property.setAttribute("class", "propertyKey");
                        propertyValue.appendChild(property);
                        propertyValue.appendChild(document.createTextNode(project[item][todoProperties]));
                        if (todoProperties === "Date"){
                            propertyValue.addEventListener("click", () => {
                                alert("You can't change the due date of a task just yet, but you can delete it and create a new one!");
                            });
                        } else if (todoProperties === "Project"){
                            propertyValue.addEventListener("click", () => {
                                const newProject = prompt("What project would you like to move this item to?");
                                if (listOfProjects.some(project => project.title === newProject)){
                                    // change the project value of the todo item
                                    project[item].Project = newProject;
                                    // add the todo item to the new project
                                    const newProjectObject = listOfProjects.find(project => project.title === newProject);
                                    newProjectObject[item] = project[item];
                                    // remove the todo item from the old project
                                    delete project[item];
                                } else {
                                    alert("Project does not exist");
                                };
                            });
                        } else if (todoProperties === "Priority"){
                            propertyValue.addEventListener("click", () => {
                                const newPriority = prompt("What priority would you like to assign to this item?");
                                if (newPriority === "High" || newPriority === "high" || newPriority === "Medium" || newPriority === "medium" || newPriority === "Low" || newPriority === "low"){
                                    project[item].Priority = capitalizeFirstLetter(newPriority);
                                    propertyValue.replaceChildren();
                                    propertyValue.appendChild(property);
                                    propertyValue.appendChild(document.createTextNode(capitalizeFirstLetter(newPriority)));
                                } else{
                                    alert("Invalid priority level");
                                };                                
                            });
                        } else if (todoProperties === "Notes"){
                            propertyValue.addEventListener("click", () => {
                                const newNotes = prompt("What would you like to change the notes to?");
                                if (newNotes === null){
                                    alert("Notes not changed");
                                } else{
                                    project[item].Notes = newNotes;
                                    propertyValue.replaceChildren();
                                    propertyValue.appendChild(property);
                                    propertyValue.appendChild(document.createTextNode(newNotes));
                                };
                            });
                        };
                        if(todoProperties === "Notes"){
                            propertyValue.setAttribute("id", "Notes");
                        };
                        todoDetailContainer.appendChild(propertyValue);
                    };
                }};
        });
    const line = document.createElement("hr");
        line.setAttribute("class", "line");
        content.appendChild(line);
};

