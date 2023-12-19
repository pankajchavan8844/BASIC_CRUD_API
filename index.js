
const express=require('express')
const router=require('./router/app.router')
const app=express();

app.use('/app',router);

app.listen(3000,()=>{
    console.log('server is running......');
})