document.addEventListener("DOMContentLoaded", function () {
    eventListeners()
})

function eventListeners() {
    const newTaskButton = document.getElementById('new-task')
    newTaskButton!.addEventListener("click", newTaskPopUpShow)
}

function newTaskPopUpShow() {
  const newTaskPopUp = document.getElementById('new-task-popup')
  newTaskPopUp!.classList.remove('hidden')
}