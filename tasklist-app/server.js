const { urlencoded } = require('express')
const express = require ('express')
const mongoose = require ('mongoose')
const app = express()
const env = require ('dotenv').config()

app.use(express.json())
app.use(urlencoded({extented:true}))


console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("connected to MongoDB..."))
.catch((err) => console.error(err));


const taskschema = new mongoose.Schema({

    task: String,
    checkbox: Boolean,
    taskadded: {type: Date, default: Date.now}
})


const Task = mongoose.model('Task', taskschema)

function createTask(task,checkbox){
    const mytask = new Task({
        
        task:task,
        checkbox:checkbox
    })
    
    mytask.save().then( res => console.log(res))
}

// createTask("Go shopping",true)

 async function getTasks(){
   const tasklist= await Task.find().sort({taskadded:1}).limit(2)
   console.log(tasklist)
}
getTasks()



