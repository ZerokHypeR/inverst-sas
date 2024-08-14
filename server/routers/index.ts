import {Router} from "express";
import Task from '../models/task';
import mongoose from "mongoose";

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


router.get("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

                // Verifica si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Task ID" });
        }

        const task = await Task.findById(id);

        if (!task) return res.status(404).json({ message: "Task Not Found" });

        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error });
    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Task ID" });
        }

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task Not Found" });
        }

        return res.json({ message: "Task Deleted Successfully", task });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error });
    }
});

router.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Validar si el ID es un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Task ID" });
        }

        // Validar si el cuerpo de la solicitud tiene los campos necesarios
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        // Actualizar la tarea
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description },
            { new: true, runValidators: true }
        );

        // Verificar si la tarea fue encontrada y actualizada
        if (!updatedTask) {
            return res.status(404).json({ message: "Task Not Found" });
        }

        return res.json({ message: "Task Updated Successfully", task: updatedTask });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error });
    }
});




export default router;


