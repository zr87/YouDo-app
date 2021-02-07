
document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.getElementById("form");
    const listEl = document.getElementById("todo-list");
    const submitBtn = formEl.submit;

    //disable submit by default
    submitBtn.disabled = true;

    // add task on form submit
    formEl.addEventListener("submit", event => {
        //prevent browser refresh
        event.preventDefault();
        // saving the inputs value
        const taskText = formEl.todo.value;
        //create list item element
        const listItemEl = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("button,delete");
        deleteBtn.innerText = "delete";
        // set  the elements inner text
        listItemEl.textContent = taskText;
        listItemEl.append(deleteBtn);
        // append the created li element
        listEl.append(listItemEl);
        //clearing the input
        formEl.todo.value = null;
    });

    // add event listener on the UL list to catch delete btn clicks
    listEl.addEventListener("click", event => {
        //stooping event bubbling
        event.stopPropagation();

        //prompt user to confirm delete
        const shuldBeDeleted = window.confirm("Do you really want to delete this task?");

        // if user hit OK then remove LI item from the UL list!
        if (shuldBeDeleted) {
            event.target.parentElement.remove();
        }
    });

    //adding validation on keyup
    formEl.todo.addEventListener("keyup", event => {
        //stooping event bubbling
        //event.stopPropagation();

        console.log("value", event.target.value);

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
