const taskList = [];

const title = document.getElementById("title");
const content = document.getElementById("content");
const cleanFields = document.getElementById("cleanFields");
const save = document.getElementById("save");
const taskContainer = document.getElementById("taskContainer");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

taskContainer.innerHTML = "";


const searchTask = (e) => taskList.filter((task) => task.title.toLowerCase().includes(e.target.value.toLowerCase()));

const filterByCompleted = (e) => taskList.filter((task) => task.completed === e.target.checked);

search.addEventListener("input", (e) => {
  const list = searchTask(e);
  onUpdateList(list);
})

filter.addEventListener("change", (e) => {
  let list = taskList;
  if(e.target.checked) {
  list = filterByCompleted(e);
  }
  onUpdateList(list);
});


const addTask = (task) => {
  taskList.push(task);
};

const onCleanFields = (e) => {
  e?.preventDefault();
  title.value = "";
  content.value = "";
};

const onSave = (e) => {
  e.preventDefault();

  if(!title.value || !content.value) {
    alert("Todos los campos son requeridos!");
    return;
  }

  const task = {
    id: taskList.length,
    title: title.value,
    content: content.value,
    completed: false,
  };
  addTask(task);
  onCleanFields();
  onUpdateList();
  console.log("taskList", taskList);
};

const onCheckTask = (id) => {
  console.log('id :>> ', id);

  const task = taskList.find((task) => task.id === id);
  task.completed = !task.completed;
  onUpdateList();
};

const deleteTask = (id) => {
  console.log('id :>> ', id);
  const taskIndex = taskList.findIndex((task) => task.id === id);
  taskList.splice(taskIndex, 1);
  onUpdateList();
};

const onUpdateList = (list) => {
  const listToRender = list || taskList;
  taskContainer.innerHTML = "";
  listToRender.forEach((task) => {
    const taskElement = document.createElement("article");
    taskElement.className = "bg-[url('./img/img.png')] w-[300px] h-[300px] bg-cover drop p-6 *:font-mono flex flex-col items-stretch";
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "bg-red-500 text-white w-8 h-8 rounded-md self-end";
    deleteButton.innerText = "x";
    deleteButton.addEventListener("click", () => deleteTask(task.id));
    
    const taskTitle = document.createElement("h2");
    taskTitle.className = "text-center font-bold text-xl";
    taskTitle.innerText = task.title;
    
    const taskContent = document.createElement("p");
    taskContent.className = "h-[65%] overflow-auto";
    if(task.completed) {
      taskContent.style.textDecoration = "line-through";
    }
    taskContent.innerText = task.content;
    
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = task.completed;
    checkBox.addEventListener("click", () => onCheckTask(task.id));

    taskElement.appendChild(deleteButton);
    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskContent);
    taskElement.appendChild(checkBox);
    
    taskContainer.appendChild(taskElement);
  });
};

cleanFields.addEventListener("click", onCleanFields);
save.addEventListener("click", onSave);
