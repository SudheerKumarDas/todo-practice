import Todo from "../models/Todo.js";

export const createTodos = async(req,res) => {
    try {
        const {title,completed}=req.body;
        if(!title || !completed===undefined){
            return res.status(403).json({
                message:"Enough data not provided"
            })
        }
        const todo = await Todo.find({title:title});
        if(todo){
            return res.status(409).json({
                message:"Todo with same title already created"
            })
        }
        const todoResponse = await Todo.create({
            title,
            completed
        })
        res.status(201).json({
            message:"Todo created successfully"
        })
    } catch (error) {
        console.error("Error in creating Todo ", error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const updateTodos = async(req,res) => {
    try {
        const {title,completed}=req.body;
        const id = req.params.id;
        if(!title || !completed===undefined){
            return res.status(403).json({
                message:"Enough data not provided"
            })
        }
        const todoFound = await Todo.findByIdAndUpdate(id,{
            title,
            completed
        }, {
            new:true
        })
        if(!todoFound){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
        res.status(200).json({
            message:"todo updated successfully",
            updatedTodo:todoFound
        })
        
    } catch (error) {
        console.error("Error in creating Todo ", error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}