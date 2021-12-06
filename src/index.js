document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDescr = document.getElementById("new-task-description");
    const color = document.getElementById("priority-select");
    renderTask(taskDescr.value, color.value);
    e.target.reset();
  });
});

function renderTask(task, taskColor) {
  const item = document.createElement("li");
  const list = document.getElementById("list");

  console.log(taskColor);

  if (task) {
    item.textContent = task;
    if (taskColor) {
      item.style.color = taskColor;
      item.style.backgroundColor = "black";
    }
    list.append(item);
    item.addEventListener("click", (e) => e.target.remove());
  } else {
    alert("Please enter a description!");
  }
}

