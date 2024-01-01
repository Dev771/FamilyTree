import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

import UserSchema from '../model/UserSchema.js';
import { AddFamily } from './familyController.js';

const salt = 10;
dotenv.config();

export const AddUser = async (req, res) => {
    
    const { email, password, dob, name, marital_Status } = req.body;

    let checkingUser;
    try {
        checkingUser = await UserSchema.findOne({ id: email });
    } catch(err) {
        return res.json({ status: 400, msg: "Error While Fetching User Credentials!!!" })
    }

    if(checkingUser) {
        return res.json({ status: 403, msg: "User with Similar Credentials Already Exists!!!" });
    }


    const user_Family_ID = uuidv4();
    const personal_Family_ID = [user_Family_ID];

    const hashedPassword = await passwordEncryption(password);

    const User = {
        id: email,
        dob,
        name,
        password: hashedPassword, 
        marital_Status,
        personal_Family_ID
    }

    try {
        const newUser = UserSchema(User);
        const savedUser = await newUser.save();
        
        const savedFamily = await AddFamily({user_Family_ID, spouse1: email, spouse2: null, decendant: [], marital_Status});

        const token = generateToken(savedUser);

        return res.send(token);

    } catch(error) {
        return res.json({ status: "error", msg: "Error While Saving User. Please Try Again!!!", error })
    } 

}

const generateToken = (user) => {
    const token = jwt.sign({ id: user.id, password: user.password }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    return token;
}

const passwordEncryption = async (password) => {

    const saltRounds = bcrypt.genSaltSync(salt);
    const hashpassword = bcrypt.hashSync(password.toString(), saltRounds);

    return hashpassword;
}


export const LoginUser = async (req, res) => {

    const { email, password } = req.body;

    let validatedUser;

    try {
        validatedUser = await UserSchema.findOne({ id: email });
    } catch(error) {
        res.json({ status: 400, msg: "Error While Fetching User Details!!!" });
    }

    if(!validatedUser) {
        res.json({ status: 401, msg: "User Not Found!!!" });
    } else {
        if(await bcrypt.compare(password, validatedUser.password)) {
            const token = generateToken(validatedUser);

            res.send(token);

        } else {
            res.json({ status: 401, msg: "User Not Found!!!" });
        }

    }

}