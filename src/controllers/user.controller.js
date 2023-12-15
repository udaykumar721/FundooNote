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
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: userData,
        message: 'User Registration Successfully!!'
      }); 
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message:`${error}`
    });
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
        res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User Login Successfully!'
      });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
    code: HttpStatus.BAD_REQUEST,
    message:`${error}`
    });
  }
};