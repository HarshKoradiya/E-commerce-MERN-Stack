const mongoose = require('mongoose')



const schema = mongoose.Schema({
    customer_id:{type:Number,require:true,unique:true},
    customerName:{type:String,require:true},
    customerAddress : {type:Number,ref:'Customer_address'},
    isLoggedin : {type:Boolean,default:false},
    customerMobile : Number,
    customerEmail : String,
    customerFcm : {type:String},
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})


module.exports = mongoose.Model('Customer',schema)