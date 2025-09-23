import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user:{
      type:Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    phoneNumber:{
      type:String,
      required:true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  });

export const Address = mongoose.model('Address', addressSchema)