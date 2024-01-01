import UserSchema from '../model/UserSchema.js';
import FamilySchema from '../model/FamilySchema.js';

export const LinkFamily = (req, res) => {
    
    const { partnerEmail, family_ID } = req.body;

    


}

export const checkFamilyID = async (req, res) => {

    const { id }  = req.params;

    try {
        const family = await FamilySchema.findOne({ id });
        
        if(family) {
            return res.status(200).send({ status: "Success", msg: true });
        } else {
            return res.status(200).send({ status: "Success", msg: false });
        }
    
    } catch(err) {
        return res.status(400).send({ status: "Error", msg: "Error while Fetching Records!!!" })
    }

}