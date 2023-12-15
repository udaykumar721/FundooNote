import express from 'express';
import * as noteController from '../controllers/note.controller';
// import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();
router.post('', noteController.createNote);
router.get('',noteController.getNote);
export default router;
