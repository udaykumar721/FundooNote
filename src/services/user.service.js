import User from '../models/user.model';

//create new user login
export const createAnUser = async (mail) => {
  const check = await User.findOne(mail)
  if(check == null){
    const userData = await User.create(mail);
    return userData;
  }
};
export const loginUser = async (mail,password) => {
  const data = await User.findOne({mail})
  if(data!=null){
    if(data.password === password ){
      return data
    }else{
      return 0
    }
  }
};
