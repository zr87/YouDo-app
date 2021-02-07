let todoItems = [];
const TODO_ITEMS_STORAGE_KEY = "todos";

const formEl = document.getElementById("form");
const listEl = document.getElementById("todo-list");
const submitBtn = formEl.submit;

window.addEventListener("load", () => {
    const parsedTodoItems = localStorage.getItem(TODO_ITEMS_STORAGE_KEY);
    if (parsedTodoItems) {
        todoItems = JSON.parse(parsedTodoItems);
        todoItems.forEach(todoItem => createListItem(todoItem));
    }
});

function initializeInputDefaults() {
    //disable submit by default
    submitBtn.disabled = true;

    //clearing the input
    formEl.todo.value = null;
    formEl.todo.className = "";
    formEl.priority.value = ""
    // set defaults
    formEl.duedate.value = new Date().toISOString().split("T")[0];
    formEl.duedate.min = new Date().toISOString().split("T")[0];

    //add focus to text input
    formEl.todo.focus();
}

document.addEventListener('DOMContentLoaded', () => {

    initializeInputDefaults();

    // add task on form submit
    formEl.addEventListener("submit", event => {
        //prevent browser refresh
        event.preventDefault();

        // saving the input values into an object
        const newTodo = {
            description: formEl.todo.value,
            dueDate: formEl.duedate.value,
            priority: formEl.priority.value
        }

        const itemIndex = storeItem(newTodo);
        //create list item element
        createListItem(newTodo, itemIndex);

        initializeInputDefaults();
    });

    // add event listener on the UL list to catch delete btn clicks
    listEl.addEventListener("click", event => {
        //stooping event bubbling
        event.stopPropagation();

        if(event.target.className.includes("delete")) {
            //get the items's index

            //prompt user to confirm delete
            const shouldDeleteItem = window.confirm("Do you really want to delete this task?");

            // if user hit OK then remove LI item from the UL list!
            if (shouldDeleteItem) {
                const index = event.target.parentElement.dataset.index;
                deleteItem(index)
                event.target.parentElement.remove();
            }
        }
    });

    //adding validation on keyup
    formEl.todo.addEventListener("keyup", event => {
        //stooping event bubbling
        event.stopPropagation();

        if(event.target.value.length >= 6) {
            event.target.classList.add("valid");
            event.target.classList.remove("invalid");
            submitBtn.disabled = false;
        } else if (event.target.value === "") {
            event.target.classList.remove("valid");
            event.target.classList.remove("invalid");
            submitBtn.disabled = true;
        } else {
            event.target.classList.remove("valid");
            event.target.classList.add("invalid");
            submitBtn.disabled = true;
        }
    });

});

function createListItem(todoItem, index) {
    const listItemEl = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("button,delete");
    deleteBtn.innerText = "delete";
    // set  the elements inner text
    listItemEl.textContent = `${todoItem.description} / ${todoItem.dueDate} / ${todoItem.priority}`;
    //set the index data attribute on the LI element
    listItemEl.dataset.index = index;
    //append the delete button the the LI element
    listItemEl.append(deleteBtn);

    // append the created LI element to the UL list
    listEl.append(listItemEl);
}

function storeItem(todo) {
    todoItems.push(todo);
    localStorage.setItem(TODO_ITEMS_STORAGE_KEY, JSON.stringify(todoItems));

    return todoItems.length - 1;
}
function deleteItem(index) {
    //remove the todo by index
    todoItems.splice(index, 1);
    //store the modified array in LS
    localStorage.setItem(TODO_ITEMS_STORAGE_KEY, JSON.stringify(todoItems));
}
