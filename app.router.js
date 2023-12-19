
const bodyParser = require('body-parser');
const express = require('express');
const service = require('../service/app.service');
const app = express();
app.use(bodyParser.json());;

app.post('/post',async (req,res)=>{
    const result=await service.postCollection(req.body);
    res.status(200).json({
        status:true,
        data:result,
        message:'data post succesfully'
    })
})

app.delete('/delete/:id',async (req,res)=>{
    const result=await service.deleteCollection(req.params.id)
    res.status(200).json({
        status:true,
        data:result,
        message:'delete data successfully'
    })
})

app.put('/update/:id',async (req,res)=>{
    const result=await service.updateCollection(req.params.id,req.body);
    res.status(200).json({
        status:true,
        data:result,
        message:'update data successfully'
    })
})

app.get('/get',async (req,res)=>{
    const result=await service.getCollection()
    res.status(200).json({
        status:true,
        data:result,
    })
})

app.get('/findById/:id',async (req,res)=>{
    const result=await service.findByIdCollection(req.params.id,req.body);
    res.status(200).json({
        status:true,
        data:result,
        message:'successfully'
    })
})

app.get('/findByName/:name',async (req,res)=>{
    const result=await service.findByNameCollection(req.params.name,req.body);
    res.status(200).json({
        status:true,
        data :result,
        message:'succesfully'
    })
})

module.exports = app;