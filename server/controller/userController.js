import { v4 as uuidv4 } from 'uuid';

import UserSchema from '../model/UserSchema.js';
import FamilySchema from '../model/FamilySchema.js';

export const AddUser = async (req, res) => {
    
    const { email, dob, name, marital_Status } = req.body;

    const user_Family_ID = uuidv4();
    const personal_Family_ID = [user_Family_ID];

    const userFamily = {
        id: user_Family_ID,
        spouse1: email,
        marital_Status
    }

    const User = {
        id: email,
        dob,
        name, 
        marital_Status,
        personal_Family_ID
    }

    const finalFamily = FamilySchema(userFamily);
    const savedFamily = await finalFamily.save();

    const newUser = UserSchema(User);
    const savedUser = await newUser.save();

    const final = { savedFamily, savedUser }

    res.send(final);

}