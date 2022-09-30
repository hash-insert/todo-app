



const express = require("express");

const app = express();

app.get('/',(req,res) => {
    // res.send("Welcome");
    res.sendFile(__dirname + "/public/index.html")
})


app.get('/tasks',(req,res)=> {
res.send(tasks)

})
app.post('/tasks',(req,res)=>{

})
app.delete('/tasks',(req,res)=> {
    
})

app.listen("3000", () => console.log("Listening on port 3000"));
