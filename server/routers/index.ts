import {Router} from "express";
import Task from '../models/task';


const router = Router();

router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

router.post("/tasks", async  (req, res) => {
    const {title, description} = req.body;

    const task = new Task({title, description});

    await task.save();
  
    res.json(task);

});

router.get ("/tasks/:id", (req,res) => {
    res.send("getting a taks!");
});


router.delete("/tasks/:id", (req,res) => {
    res.send("delete taks!");
});

router.put("/tasks/:id", (req,res) => {
    res.send("updating taks");
});

export default router;


