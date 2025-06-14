const express=require('express')
const router=express.Router()
const Task=require('../models/Task')
router.get('/',async(req,res)=>{
    const tasks= await Task.find()
    res.json(tasks)
})
router.post('/',async(req,res)=>{
    const newTask= new Task({title:req.body.title})
    await newTask.save()
    res.status(201).json({message:"Task was added successfully"})
})
router.delete('/:id',async(req,res)=>{
    await Task.findOneAndDelete(req.params.id)
    res.json({message:"Deleted Successfully"})
})
module.exports=router;
