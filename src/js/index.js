"use strict";
document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
});
let toDoID = 2;
function eventListeners() {
    const newTaskButton = document.getElementById('new-task');
    newTaskButton.addEventListener("click", newTaskPopUpShow);
    const newTaskCloseButton = document.getElementById('new-task-popup--close');
    newTaskCloseButton.addEventListener("click", newTaskPopUpClose);
    const newTaskAdd = document.getElementById('new-task-popup--add');
    newTaskAdd.addEventListener("click", newTaskPopUpAddButton);
}
function newTaskPopUpShow() {
    const newTaskPopUp = document.getElementById('new-task-popup');
    newTaskPopUp.classList.remove('hidden');
}
function newTaskPopUpClose() {
    const newTaskPopUp = document.getElementById('new-task-popup');
    newTaskPopUp.classList.add('hidden');
}
function newTaskPopUpNameAlert(addOrRemove) {
    const newTaskNameAlert = document.getElementById('new-task-popup--name-alert');
    if (addOrRemove == "remove") {
        newTaskNameAlert.classList.remove('hidden');
    }
    else if (addOrRemove == "add") {
        newTaskNameAlert.classList.add('hidden');
    }
}
function newTaskPopUpDescriptionAlert(addOrRemove) {
    const newTaskDescriptionAlert = document.getElementById('new-task-popup--description-alert');
    if (addOrRemove == "remove") {
        newTaskDescriptionAlert.classList.remove('hidden');
    }
    else if (addOrRemove == "add") {
        newTaskDescriptionAlert.classList.add('hidden');
    }
}
function newTaskPopUpAddButton() {
    const newTaskPopUp = document.getElementById('new-task-popup');
    const newTaskName = document.getElementById('new-task-popup--name');
    const newTaskDescription = document.getElementById('new-task-popup--description');
    newTaskPopUpNameAlert("add");
    newTaskPopUpDescriptionAlert("add");
    if (newTaskName.value == "") {
        newTaskPopUpNameAlert("remove");
    }
    else if (newTaskDescription.value == "") {
        newTaskPopUpDescriptionAlert("remove");
    }
    else {
        newTaskPopUp.classList.add('hidden');
        addNewTask(newTaskName.value, newTaskDescription.value);
    }
}
function addNewTask(name, description) {
    const toDo = document.getElementById('to-do');
    const div = document.createElement('div');
    const date = brlDate(new Date().toISOString().slice(0, 10));
    div.id = `to-do-${toDoID}`;
    div.innerHTML = `
  <div class="mx-2 bg-blue-200">
    <div class="flex justify-between">
      <div class="mx-2">
        <span>${toDoID}</span>
        <span class="px-2">${name}</span>
        <span>${date}</span>
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
function brlDate(date) {
    return date.split('-').reverse().join('/');
}
