const mongoose = require('mongoose')

const schema = mongoose.Schema({
    product_id : {type:Number,required:true,unique:true},
    category_id : {type:Number,required:true,ref:'Category'},
    name : {type:String,required:true},
    price : {type:Number,required:true,default:0.0},
    varients : [{}],
    sku : {type:String,required:true,unique:true},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})

module.exports = mongoose.Model("Product",schema)