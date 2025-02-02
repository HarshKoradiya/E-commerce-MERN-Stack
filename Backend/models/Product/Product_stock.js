const mongoose = require('mongoose')

const schema = mongoose.Schema({
    stock_id : {type:Number,require:true,unique:true},
    product_id : {type:Number,require:true,ref:'Product'},
    category_id : {type:Number,require:true,ref:'Category'},
    min_quantity : {type:Number,default:0.0},
    quantity : {type:Number,default:0.0},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})

module.exports = mongoose.Model("Product_stock",schema)