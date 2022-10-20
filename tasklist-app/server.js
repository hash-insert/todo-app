const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv").config();

app.use(express.json());
app.use(urlencoded({ extented: true }));

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.error(err));

const taskschema = new mongoose.Schema({
  task: String,
  checkbox: Boolean,
  taskadded: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskschema);

function createTask(task, checkbox) {
  const mytask = new Task({
    task: task,
    checkbox: checkbox,
  });

  mytask.save().then((res) => console.log(res));
}

//  createTask("Eat Apples",false)

//  async function getTasks(){
//    const tasklist= await Task.find()
//   console.log(tasklist)

// }
//  getTasks()

app.get("/", (req, res) => {
  res.send("Hello word");
});

// GET request for the endpoint \tasks → To Get the tasks

app.get("/tasks", async (req, res) => {
  const tasklist = await Task.find();

  res.send(tasklist);
});

//POST request for the endpoint \tasks → To Add a task

app.post("/tasks", (req, res) => {
  const { task, checkbox } = req.body;
  try {
    createTask(task, checkbox);
    res.send("task added");
  } catch (err) {
    console.log(err);
    res.send("error in adding task");
  }
});
//DELETE request for the endpoint \tasks → To Remove a task
app.delete('/tasks',async (req,res)=> {
const {task}= req.body
    const tasklist = await Task.deleteOne({task});

    res.send(tasklist);
    
})




//PUT request for the endpoint \tasks → To Update a task (when user checks the checkbox)

app.put('/tasks',async (req,res)=> {
    const {task}= req.body
    const tasklist = await Task.updateOne({"task":"Boil Eggs"},{$set:{"task":req.body.task}});
    console.log(task)

    res.send(tasklist); 
})



// localhost 
port = 5000;
app.listen(port, () => {
  console.log(`Listening on port,${port}`);
});
