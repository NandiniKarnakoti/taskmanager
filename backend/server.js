const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB Connected Successfully"))
    .catch(err => console.log(err))

app.use('/api/tasks',require('./routes/taskRoutes'))
app.get('/',(req,res)=>{
    res.send("Task Manager Api is running")
})
const PORT =process.env.PORT||4000;
app.listen(PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))
