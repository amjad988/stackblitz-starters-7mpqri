import mongoose from  "mongoose"

const doctorRecordSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    salary:{
      type:String,
      required:true
    },
   qualification:{
      type:String,
      required:true
   },
   require:{
     type:Number,
     default:0
   },
   worksHospital:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Hospital"
   }
  },{timestamps:true})

export const Doctor=mongoose.model(
  'Doctor',
  doctorRecordSchema
)