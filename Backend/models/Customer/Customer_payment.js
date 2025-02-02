const mongoose = require('mongoose')

const schema = mongoose.Schema({
    payment_id:{type:Number,required:true,unique:true},
    customer_id:{type:Number,required:true,ref:'Customer'},
    order_id: {type:Number,required:true,ref:'Order'},
    paymentType:{type:String,required:true,default:'COD'},
    paymentAmount : {type:Number,required:true},
    paymentStatus : {type:String,required:true},
    paymentDate : {type:Date,required:true},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})

// schema.pre('save',async function(){
//     const 
// })


module.exports = mongoose.Model('Customer_payment',schema)