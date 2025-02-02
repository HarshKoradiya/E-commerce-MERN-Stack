const mongoose = require('mongoose')

const schema = mongoose.Schema({
    cart_id : {type:Number,required:true,unique:true},
    product_id:{type:Number,required:true,ref:'Product'},
    category_id:{type:Number,ref:'Category'},
    total_amount : {type:Number,required:true},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})

module.exports = mongoose.Model("Cart",schema)