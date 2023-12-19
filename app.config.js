
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/practice1').then(()=>{
    console.log('conected to mongodb/database');
})

