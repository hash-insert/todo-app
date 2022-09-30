console.log("client js")
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const taskList = document.getElementById('tasks');

// Fetch Tasks
function fetchData() {
    fetch('http://localhost:3000/tasks').then(
        res => res.json()
    ).then(
        data => {
            console.log(data)
            createTaskElement(data)
        }
    )
}

// Fetch Data initially
fetchData()


// POST method to add Task
function fetchAddData() {
    const task = input.value;

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    })
        .then(res => res.json()
            .then(data => console.log(data))
        )
}

// Delete Task
function fetchDeleteData(item) {

    console.log("delete ", item)

    fetch('http://localhost:3000/tasks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
        .then(res => res.json()
            .then(data => createTaskElement(data))
        )
}

function fetchUpdateTask(item){
fetch('http://localhost:3000/tasks',{
    method:'PUT',
    headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
         })
        .then(res => res.json()
            .then(data => console.log(data))
        )
}

function createTaskElement(data) {
    // Clear the list 
    taskList.innerHTML = "";

    // Create list of tasks received from the backend
    data.forEach((item) => {
        const li = document.createElement('li')
        li.className="task-list-item";

        let cb = document.createElement('input');
        cb.type = "checkbox";
        cb.name = "todo";
        cb.id = "todo_" + item.id;
        

        //
        cb.addEventListener('change',(e)=> {
  console.log(e)
  item.completed=e.target.checked
  fetchUpdateTask(item)
        })

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = "remove"
        removeBtn.className = "rm-btn"

        removeBtn.addEventListener('click', () => {
            fetchDeleteData(item);
            fetchData()
        });

        // li.innerText = item.task;
        var label = document.createElement('label') 
        label.htmlFor = "todo_" + item.id;;
        label.appendChild(document.createTextNode(item.task));

        li.appendChild(cb);
        li.appendChild(label);
        li.appendChild(removeBtn)

        taskList.appendChild(li)
    });

}

btn.addEventListener('click', function (e) {
    // e.preventDefault()

    fetchAddData()
    fetchData()

    // clear input
    input.value = ""
})