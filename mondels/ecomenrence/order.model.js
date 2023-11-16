import mongoose from "mongoose"


const orderSchema=new mongoose.Schema({
  productID:{
    type:mongoose.Schema.ObjectId,
    ref:"Product",

  },
  quantity:{
    type:Number,
    required:true
  }
})
const orderSchema= new mongoose.Schema(
  {
    orderPrice:{
      type:Number,
      required:true
    },
    customer:{
      type:mongoose.Schema.ObjectId,
      ref:"User"
    },
    orderItems:{
      type:[orderSchema]
    },
    address:{
      type:String,
      required:true
    },
    status:{
      type:String,
      enum:["Pending","CANCELLED","DELEVELD"],
      default:"PENDING"
    }
  },{timestamps})

export const Order =mongoose.model("Order",orderSchema)