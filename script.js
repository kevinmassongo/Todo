const inputTask = document.getElementById("task");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

const hasOnlySpaces = (value) => {
  return value.trim().length != 0;
};
const createDeleteButton = () =>{
  const deleteTaskItemButton = document.createElement("button");
  const deleteButtonText = document.createTextNode("X");
  deleteTaskItemButton.appendChild(deleteButtonText);
  deleteTaskItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.parentElement.remove();
  });
  return deleteTaskItemButton;
};
const createTaskItem = (value) => {
  const newTaskItem = document.createElement("li");
  const taskItemText = document.createTextNode(value.trim());
  const deleteTaskItemButton = createDeleteButton();
  newTaskItem.appendChild(taskItemText);
  newTaskItem.appendChild(deleteTaskItemButton);
  
  return newTaskItem;
};
const addTaskItemToTaskList = () => {
  const inputTaskValue = String(inputTask.value);
  if (hasOnlySpaces(inputTaskValue)) {
    const newTaskItem = createTaskItem(inputTaskValue);
    taskList.prepend(newTaskItem);
  }
  inputTask.value = "";
};
addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTaskItemToTaskList();
});