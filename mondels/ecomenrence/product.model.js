import mongoose from "mongoose"

const productSchema=new mongoose.Schema(
  {
    description:{
      require:true,
      type:String
    },
    name:{
      require:true,
      type:String
    },
    productImg:{
      type:String,
    },
    price:{
      type:Number,
      default:0
    },
    stock:{
      default:0,
      type:Number
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category",
      required:true
    },
    owership:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },{timestamps:true})

export const Product=mongoose.model("Product",productSchema)