const input = document.getElementById('taskadder')
const btn= document.getElementById('btn')

//fetch tasks

function fectchTasks(){

    fetch('MONGO_URL')
    .then(res => res.json())
    .then(data => 
    
    input.value = data)


}
fectchTasks()
