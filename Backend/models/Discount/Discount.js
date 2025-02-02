const mongoose = require('mongoose')

const schema = mongoose.Schema({
    discount_id : {type:Number,required:true,unique:true},
    name:{type:Number,required:true},
    product_id:[{type:Number,required:true,ref:'Product'}],
    category_id: [{type:Number,required:true,ref:'Category'}],
    discount_percentage:{type:Number,required:true},
    isActive : {type:Boolean,required:true,default:false},
    created_at : Date,
    end_at:{type:Date,required:true},
    modified_at : Date,
    deleted_at : Date
})

module.exports = mongoose.Model("Discount",schema)