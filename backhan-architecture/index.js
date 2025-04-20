const express=require('express')
const app=express()

const mongoose=require('mongoose')
const requirecors=require('cors')
require("dotenv").config();

const path=require('path')
const bodyParser = require('body-parser');





// app.use(express.static('./public/upload'));
mongoose
.connect(process.env.DB_URI, {
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));



app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(requirecors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const routerapi=require('./router/routes')
app.use(routerapi)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







const PORT =  5000;

app.listen(PORT,()=>{
    console.log(`THIS SERVER RUN ON PORT${PORT}`);
})