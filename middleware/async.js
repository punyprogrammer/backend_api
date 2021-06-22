const asyncHandler=fn=>(res,req,next)=>{
    Promise.resolve(fn(res,req,next)).catch(next);
}
module.exports=asyncHandler