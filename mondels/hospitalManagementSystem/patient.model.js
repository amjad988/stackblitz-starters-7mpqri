import mongoose from  "mongoose"

const patientRecordSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    diagsoeWith:{
      type:String,
      required:true
    },
    adress:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      required:true
    },
    bloodGroup:{
      type:String,
      required:true
    },
    admittedIn:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  },{timestamps:true})

export const   PatientRecord=mongoose.model(
  'PatientRecord',
   patientRecordSchema
)