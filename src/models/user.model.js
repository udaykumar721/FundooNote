import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    mail: {
      type : String
    },
    phone:{
      type:String
    },
    city:{
      type:String
    },
    password :{
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
