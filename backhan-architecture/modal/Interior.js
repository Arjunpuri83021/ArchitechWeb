const mongoose=require('mongoose')


const interiorschema=mongoose.Schema({

    category:String,
    image:[String],
    address:String,
    desc:String,
    date:String,
    Area:String,
    status:String





   
})


module.exports=mongoose.model('interiorlist',interiorschema)