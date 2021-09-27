const express = require('express')
const router = express.Router()
const Alien=require('../models/alien')
router.get('/',async(req,res)=>{
    try{
        const aliens=await Alien.find()
        res.json(aliens)
    }catch(err){
    res.send('Error '+ err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
    res.send('Error '+ err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const a1=await alien.save()
        res.json(a1)
    }catch(err){
    res.send('Error '+ err)
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const id= req.params.id
        await Alien.findByIdAndRemove(id).exec()
        res.send('Removed')
    }catch(err){
    res.send('Error '+ err)
    }
})
router.post('/',async (req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        QuestionLevel:req.body.QuestionLevel,
        YearOfStudy:req.body.YearOfStudy,
        QuestionPaperSetter:req.body.QuestionPaperSetter
    })
    try{
        const a1=await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error '+err)
    }
})
module.exports=router