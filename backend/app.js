var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var cors =  require("cors")
var db = require("./db/taskdata")
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())  
  
app.get("/task",async (req,res)=>{
    const task = await db.getAllTask();
    res.status(200).json({task})
})

app.post("/task",async (req,res)=>{
    const result = await db.createTask(req.body);
    res.status(200).json(result);
})

app.patch("/task",async (req,res)=>{
    const result = await db.updateTask(req.body.id,req.body.task);
    res.status(200).json(result)
})

app.listen(3000,()=>{console.log("new info")});