const express = require("express");

const app = express();
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

const data = {
    "tasks":[
        {id:1, task:"buy stocks", completed:false}
    ]
    // ,
    // "completed-tasks":[
    //     "Do yoga",
    // ]
}

// app.get('/',(req,res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

// Create RESTful APIs
// GET 
app.get('/tasks',(req,res) =>{
    res.send(data["tasks"])
})

// POST 
app.post('/tasks', (req,res) => {
    console.log("posting", req.body)
    const {task } = req.body;
    const newTask = {id:data["tasks"].length + 1 ,task, completed:false}
    data["tasks"].push(newTask)
    res.send({"status":"ok"})
})

// DELETE 
app.delete('/tasks',(req,res) => {
    console.log("removing",req.body)
    const task = data.tasks.find(item => item.id === req.body.id)
    if (!task) return res.status(404).send("Task not found");

    const index = data.tasks.indexOf(task);
    data.tasks.splice(index,1);

    res.send(data.tasks)
})


// Listening to server
app.listen("3000", () => console.log("Listening on port 3000"));
