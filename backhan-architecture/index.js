const express=require('express')
const routerapi=require('./router/routes')
const mongoose=require('mongoose')
const requirecors=require('cors')
const path=require('path')
const bodyParser = require('body-parser');

const app=express()



// app.use(express.static('./public/upload'));

mongoose.connect('mongodb://127.0.0.1:27017/architecture').then(()=>{
    console.log("successsfully connected to the database");
}).catch((error)=>{
    console.log(`error in the datbase connection${error}`);

})

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
app.use(requirecors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(routerapi)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{

res.send("hello manjeet")

})





const PORT =  5000;

app.listen(PORT,()=>{
    console.log(`THIS SERVER RUN ON PORT${PORT}`);
})