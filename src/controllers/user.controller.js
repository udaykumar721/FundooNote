import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createAnUser = async (req, res, next) => {    
  try {
    const userData = await UserService.createAnUser(req.body);
    if(userData == null){
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: userData,
        message: 'User Exist Already!!'
      });
    }else{
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: userData,
        message: 'User Created Successfully!!'
      });
    }  
  } catch (error) {
    next(error)
  }
};

/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const loginUser = async (req, res, next) => {
  try {
    const data = await UserService.loginUser(req.body.mail,req.body.password);
    if(data!=null && data!=0){
        res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User Login Successfully!'
      });
    }else if(data==0){
        res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        message: 'Wrong PassWord Enter The Correct PassWord!'
      });
    }else{
        res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        message: 'User Does not Exists!'
      });
   }
  } catch (error) {
    next(error);
  }
};