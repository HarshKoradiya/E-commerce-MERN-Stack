const mongoose = require('mongoose')

const schema = mongoose.Schema({
    order_id:{type:Number,require:true,ref:'Order'},
    customer_id:{type:Number,require:true,ref:'Customer'},
    amount:{type:Number,require:true},
    order_status:{type:String,require:true},
    discount_id:{type:Number,ref:'Discount'},
    payment_id:{type:Number,ref:'Customer_payment'},
})

module.exports = mongoose.Model('Order_details',schema)