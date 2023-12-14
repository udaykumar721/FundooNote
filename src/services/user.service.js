import User from '../models/user.model';

//create new user login
export const createAnUser = async (body) => {
  const check = await User.exists(body)
  if(!check){
    const userData = await User.create(body);
    return userData;
  }
};
