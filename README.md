# YouDo-app
The YouDo app - test project for JS basics, DOM, BOM

## Work flow
Create your copy from the project <a href="https://jamboard.google.com/d/1hzc1YTasUJAWPheYo_j9iUdnOQjgG-o9ivvbT8SdDXU/edit?usp=sharing" target="_blank">Kanban board</a> and mark your progress on it!

## Story points

| Code       | Story title | description     |
| :---       |    :----:   | :---          |
| MZ-01      | Creating a todo       |When we open the application, we see an form, where I can type my task.   |
| MZ-02      | Adding todo to the list        | When we click on the 'create' button, the typed task item appears on the screen. The screen can contain many tasks.   |
| MZ-03      | Deleting a todo | An button appears next to every single item. If we click on this button, the item is deleted from the "YouDo" list. |
| MZ-04    | Validating the todo | The input field validates the task, it can not be empty and the task description must be at least 6 characters long. The validation process runs at every keyup event. The input field is red, when the task description doesn't match the validation criterias, and green, when it is ready to create. |
| MZ-05    | Restricting submittion  | The create button is disabled so far the input doesn't pass the validation.  |
| MZ-06    | Storing the todos | If we refresh the browser, the list remains. |
| MZ-07    | Todo due date | We can add due date to every task item, the due appears on the screen too. |
| MZ-08    | Todo priority | We can add priority to the task item (on the scale of tree [low, medium, high]), the priority appears on the screen too |
| MZ-09    |Todo modification | I can modify the single task items: task description, priority and due. |
| MZ-10    | Filtering todos |There is a select input field on the screen, where we can filter task by priority. Selectable options = [low, medium, high, all item] |
| MZ-11    |  Remember filter option |The selected filter remains after browser refresh. |



## Before You start

- Examine the tasks! Read trough carefully all the storypoints!
- Create a pencil wireframe mockup how would it look like!
- 1 storypoint = 1 commit
- Priority is on functionality, use minimal CSS! 
- Plan some breaks beforehand to stretch and walk beforehand, you have plenty of time!
- Ask help from instructors and not from your fellows! 


## Help
### MZ-07  -  Storing arrays and objects in localStorage
LocalStorage only supports strings. Use JSON.stringify() to convert array to a tring and JSON.parse() to convert it back. 
```   
const myArr = ['bacon', 'lettuce', 'tomatoes'];
const myArrStr = JSON.stringify(myArr); 

console.log(myArrStr);
// "["shark","fish","dolphin"]"

console.log(JSON.parse(myArrStr));
// ["shark","fish","dolphin"]  ``` 


