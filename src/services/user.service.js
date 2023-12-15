import { error } from '@hapi/joi/lib/base';
import User from '../models/user.model';
import bcrypt from 'bcrypt'
//create new user login
export const createAnUser = async (body) => {
  const mail = body.mail
  const check = await User.findOne({mail})
  if(!check){
    const salt = 10
    const hash = bcrypt.hashSync(body.password, salt);
    body.password = hash
    const userData = await User.create(body);
  return userData;
  }else{
    throw new Error("User Email Already Exists")
  }
};
export const loginUser = async (mail,password) => {
  const data = await User.findOne({mail})
  if(data!=null){
    const hash = bcrypt.compareSync(password,data.password); 
    if(hash){
      return data
    }else{
      throw new Error ("Wrong Password!!Please Enter The Correct Paswword")
    }
  }else{
    throw new Error ("User Doesn't Exist")
  }
};
