import { Schema, model } from 'mongoose'

const noteSchema = new Schema(
  {
    title: {type: String, required : true},
    description: {type : String, required:true},
    colour:{type:String},
  },
  {
    timestamps: true
  }
);

export default model('Notes', noteSchema);

