import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createNote = async (req, res, next) => {    
  try {
    const data = await NoteService.createNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Created Note Successfully!!'
      }); 
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message:`${error}`
    });
  }
};
export const getNote = async (req, res, next) => {    
    try {
      const data = await NoteService.getNote();
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Get Details Successfully!!'
        }); 
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
      });
    }
  };
