const express=require('express')
const dotenv=require('dotenv')
const colors=require('colors')
const morgan =require('morgan')
const bootcamps=require('./routes/bootcamps')
const connectDB=require('./config/db')
const errorHandler=require('./middleware/error')
//Loading the env variables
dotenv.config({path:'./config/config.env'})
//Connect to the database
connectDB()
const app=express()
const PORT=process.env.PORT||5000
//Use parser
app.use(express.json())
//Mount the bootcamp routes on app 
app.use('/api/v1/bootcamps',bootcamps)
//Use the errorhandler middleware
app.use(errorHandler)


const server=app.listen(PORT,()=>{
    console.log(`The server is running on PORT${PORT} in ${process.env.NODE_ENV} mode`.brightCyan.bold)
})
//Handled unhandled promise rejection
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:  ${err.message}`)
    //Close the server and exit process
    server.close(()=>process.exit(1))

})