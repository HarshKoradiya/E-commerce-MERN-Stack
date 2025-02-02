const mongoose = require('mongoose')


const schema = mongoose.Schema({
    order_id : {type:Number,require:true,unique:true},
    address_id:{type:Number,require:true,ref:"Customer"},
    product_id:[{type:Number,require:true,ref:'Product'}],
    quantity : {type:Number,require:true},
    order_date:{type:Date,require:true},
    isReturnable : {type:Boolean,require:true,default:true},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})


module.exports = mongoose.Model("Order",schema)