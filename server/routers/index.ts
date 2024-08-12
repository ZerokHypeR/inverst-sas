import {Router} from "express";
import Task from '../models/task';


const router = Router();

router.get("/tasks", async (req,res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.send("getting taskts!");
})

router.get ("/tasks", (req,res) => {
    res.send("getting tasks!");
});


router.post ("/tasks", (req,res) => {
    res.send("creating tasks");
});

router.get("/tasks/:id", (req,res) => {
    res.send("getting tasks");
});

router.delete("/tasks/:id", (req,res) => {
    res.send("delete tasks");
});

router.put("/tasks/:id", (req,res) => {
    res.send("updating tasks");
});

export default router