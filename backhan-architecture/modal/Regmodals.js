const mongoose=require('mongoose')


const architectschema=mongoose.Schema({

    category:String,
    image:[String],
    Address:String,
    desc:String,
    date:String,
    Area:String,
    status:String





   
})


module.exports=mongoose.model('architectlist',architectschema)