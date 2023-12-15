import User from '../models/user.model';

//create new user login
export const createAnUser = async (body) => {
  const check = await User.exists(body)
  if(!check){
    const userData = await User.create(body);
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
