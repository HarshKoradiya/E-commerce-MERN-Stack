const mongoose = require('mongoose')

const schema = mongoose.Schema({
    favorite_id:{type:Number,require:true,unique:true},
    product_id:{type:Number,require:true,ref:'Product'},
    category_id:{type:Number,ref:'Category'},
    customer_id : {type:Number,require:true,ref:'Customer'},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})

module.exports = mongoose.Model("Favorite",schema)