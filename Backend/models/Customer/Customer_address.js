const mongoose = require('mongoose')
const Customer = require('./Customer')

const schema = mongoose.Schema({
    address_id:{type:Number,required:true,unique:true},
    customer_id:{type:Number,required:true,ref:'Customer'},
    address_line_1 : {type:String,required:true},
    address_line_2 : String,
    city : String,
    postalCode : Number,
    country : String,
    created_at : Date,
    modified_at : Date,
    deleted_at : Date
})

schema.pre('save',async function(){
    try{
        //checking wheather the given customer is exists or not 
        const customerExists = await Customer.exists({customer_id:this.customer_id}) 
        if(!customerExists){
            return next(new Error('Customer not Exists.'));
        }
        next(); // customer is exists.
    }
    catch(Error){
        next(Error)
    }

})


module.exports = mongoose.Model('Customer_address',schema)