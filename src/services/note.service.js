import { error } from '@hapi/joi/lib/base';
import Note from '../models/note.model';
export const createNote = async (body) => {
    const description = body.description
    const check = await Note.findOne({description})
    if(!check){
        const data = await Note.create(body);
        return data;
    }else{
    throw new Error("User Note Description Is Already Exists")
    }
};
export const getNote = async () => {
    const data = await Note.find();
    return data;
};