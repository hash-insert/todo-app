const { urlencoded } = require('express')
const express = require ('express')
const mongoose = require ('mongoose')
const app = express()

app.use(express.json())
app.use(urlencoded({extented:true}))


mongoose.connect('mongodb://localhost/todo')
.then(() => console.log("connected to MongoDB..."))
.catch((err) => console.error(err));


const taskschema = new mongoose.Schema({
    id,
    task: String,
    checkbox: Boolean,
    taskadded: {type: Date, default: Date.now}
})


const Task = mongoose.model('Task', taskschema)

function createtask(id,task,checkbox){
    const mytask = new Task({
        id:id,
        task:task,
        checkbox:false
    })
    
    mytask.save().then( res => console.log(res))
}
