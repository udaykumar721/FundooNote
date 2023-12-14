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
