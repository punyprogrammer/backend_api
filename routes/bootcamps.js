const express=require('express')
const router=express.Router()
const {getBootcamps,getBootcamp,updateBootcamp,postBootcamp,deleteBootcamp}=require('../controllers/bootcamps')
//Set up a non id route 
router
.route('/')
.get(getBootcamps)
.post(postBootcamp)
//set up the routes with id
router
.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)
module.exports=router
