//Load the model
const Bootcamp=require('../models/Bootcamp')
const ErrorHandler=require('../utils/errorResponse')
const asyncHandler=require('../middleware/async')
//@desc Gets the list of all the bootcamps
//@route GET/api/vi/bootcamps
//@access Public
exports.getBootcamps= asyncHandler(async (req,res,next)=>{
        const bootcamps=await Bootcamp.find();
        res.status(200).json({success:true,data:bootcamps}) 
    })
//@desc Gets the list of all the bootcamps
//@route GET/api/vi/bootcamps/:id
//@access Public
exports.getBootcamp=asyncHandler(async (req,res,next)=>{
    const bootcamp= await Bootcamp.findById(req.params.id)
    if(!bootcamp)
    {
        return next(new ErrorHandler(`No user with  id as ${req.params.id} was found`,404))
    }
    res.status(200).json({success:true,data:bootcamp})
})
//@desc update a new bootcamp
//@route PUT/api/vi/bootcamps
//@access Private
exports.updateBootcamp=asyncHandler(async (req,res,next)=>{
        const bootcamp =await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        if(!bootcamp)
        {
        return next(new ErrorHandler(`No user with  id as ${req.params.id} was found`,404))
           
        }
        res.status(200).json({success:true,data:bootcamp})
})

//@desc  post a new bootcamp
//@route POST/api/vi/bootcamps
//@access Private
exports.postBootcamp= asyncHandler(async (req,res,next)=>{
        const bootcamp =await Bootcamp.create(req.body)
        res.status(201).json({
            success:true,
            data:bootcamp
        })
})
//@desc  delete a  bootcamp
//@route DELETE/api/vi/bootcamps/:id
//@access Private
exports.deleteBootcamp=asyncHandler(async (req,res,next)=>{
        const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id)
        if(!bootcamp)
        {
        return next(new ErrorHandler(`No user with  id as ${req.params.id} was found`,404))
            
        }
        res.status(200).json({success:true,deleted:bootcamp})
})