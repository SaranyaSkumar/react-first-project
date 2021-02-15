var express = require('express');
var router= express.Router();
const tasks= require('../database/models/tasks');
const Task= require('../mongodb/models/tasks');

router.get('/get/tasks/all', async function(req, res, next){
    try{
        await Task.find({ status: true }).then(task=>{
            res.json({message: 'success', data: task});
        })
        // tasks.findAll({where:{status:true}}).then(task=>{
        //     res.json({message: 'success', data: task});
        // })
    }catch(e){
        res.json({message:'error', error:e})
    }
});

router.get('/get/tasks/byId', function(req, res, next){
    try{
        tasks.findAll({where:{id:id}}).then(task=>{
            res.json({message: 'success', data: task});
        });
    }catch(e){
        res.json({message:'error', error:e})
    }
});

router.post('/create/tasks',async function(req, res, next){
    try{
        let payload=req.body;
        payload.status=true;
        let taskModel= new Task(payload);
        await taskModel.save();
        res.json(taskModel);
        // tasks.create(req.body).then(task=>{
        //     res.json({message: 'success', data: task});
        // });
    }catch(e){
        res.json({message:'error', error:e})
    }
});

router.post('/update/tasks',async function(req, res, next){
    try{
        if(!req.body._id){
            return  res.json({message:'error', error:'id required'});
        }
        let id=req.body._id;
        await Task.findByIdAndUpdate(id,req.body).then(task=>{
            res.json({message: 'success', data: task});
        })
        // tasks.update(req.body,{where:{id:req.body.id}}).then(task=>{
        //     res.json({message: 'success', data: task});
        // });
    }catch(e){
        res.json({message:'error', error:e})
    }
});

router.post('/disable/tasks',async function(req, res){
    try{
        if(!req.body._id){
            return  res.json({message:'error', error:'id required'});
        }
        let id=req.body._id;
        req.body.status=false;
        await Task.findByIdAndUpdate(id,req.body).then(task=>{
            res.json({message: 'success', data: task});
        })
        // tasks.update({status:false},{where:{id:req.body.id}}).then(task=>{
        //     res.json({message: 'success', data: task});
        // });
    }catch(e){
        res.json({message:'error', error:e})
    }
});

router.post('/delete/tasks', function(req, res, next){
    try{
        if(!req.body.id){
            return  res.json({message:'error', error:'id required'});
        }
        tasks.destroy({where:{id:req.body.id}}).then(task=>{
            res.json({message: 'success', data: task});
        });
    }catch(e){
        res.json({message:'error', error:e})
    }k
});

router.get('/all',async function(re, res){
    try{
        let task=await Task.find();
        res.json(task);
    }catch(e){

    }
});

router.post('/create', async function(req, res){
    try{
        console.log("asdasdsad")
        let payload=req.body;
        let taskModel= new Task(payload);
        await taskModel.save();
        res.json(taskModel);
    }catch(e){
        res.json({message:'error'});
    }
})

module.exports= router;