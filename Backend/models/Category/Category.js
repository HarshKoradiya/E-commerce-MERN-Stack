const mongoose = require('mongoose')



const schema = mongoose.Schema({
    category_id:{type:Number,required:true,unique:true},
    categoryName:{type:String,required:true},
    categoryDescription : String,
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})


module.exports = mongoose.Model('Category',schema)
