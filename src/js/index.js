"use strict";
document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
});
function eventListeners() {
    const newTaskButton = document.getElementById('new-task');
    newTaskButton.addEventListener("click", newTaskPopUpShow);
    const newTaskCloseButton = document.getElementById('new-task-popup--close');
    newTaskCloseButton.addEventListener("click", newTaskPopUpClose);
    const newTaskAdd = document.getElementById('new-task-popup--add');
    newTaskAdd.addEventListener("click", newTaskPopUpAddButton);
}
const newTaskPopUp = document.getElementById('new-task-popup');
let toDoID = 2;
function newTaskPopUpShow() {
    newTaskPopUp.classList.remove('hidden');
}
function newTaskPopUpClose() {
    newTaskPopUp.classList.add('hidden');
}
function newTaskPopUpAddButton() {
    const newTaskName = document.getElementById('new-task-popup--name');
    const newTaskDescription = document.getElementById('new-task-popup--description');
    newTaskPopUp.classList.add('hidden');
    addNewTask(newTaskName.value, newTaskDescription.value);
}
function addNewTask(name, description) {
    const toDo = document.getElementById('to-do');
    const div = document.createElement('div');
    div.id = `to-do-${toDoID}`;
    div.innerHTML = `
  <div class="mx-2 bg-blue-200">
    <div class="flex justify-between">
      <div class="mx-2">
        <span>1</span>
        <span class="px-2">${name}</span>
        <span>12/10/2022</span>
      </div>
      <div class="mx-2">
        <i class="fa-solid fa-arrow-left"></i>
        <span class="mx-2"
          ><i class="fa-solid fa-arrow-right"></i
        ></span>
        <span class="text-red-300"
          ><i class="fa-solid fa-square-xmark"></i
        ></span>
      </div>
    </div>
  </div>
  <div class="mx-2 bg-white text-left">
    <div class="mx-2 mb-2">
      <span
        >${description}
      </span>
    </div>
  </div>
`;
    toDo.appendChild(div);
    toDoID++;
}
