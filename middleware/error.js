const ErrorResponse=require('../utils/errorResponse')
const errorHandler=(err,req,res,next)=>{
    let error={...err}
    error.message=err.message
    console.log(err)
    //Mongoose invalid objectId
    if(err.name==='CastError')
    {
        const message=`Resource with the id of ${err.value} was not found`
        error= new ErrorResponse(message,404)
    }
    //Moongose Duplicate Kay error 
    if(err.code===11000)
    {
        const message='Duplicate field value entered'
        error =new ErrorResponse(message,400)
    }
    //Moongoose validation error
    if(err.name==='ValidationError')
    {
        const message=Object.values(err.errors).map(val=>val.message)
        error= new ErrorResponse(message,400)
    }

    res.status(error.statusCode||500).json({
        success:false,
        error:error .message||"Server Error"
    })
}
module.exports=errorHandler