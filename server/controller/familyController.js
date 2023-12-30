import FamilySchema from "../model/FamilySchema.js"

export const AddFamily = async ({ user_Family_ID, spouse1, spouse2, decendant, marital_Status }) => {

    const userFamily = {
        id: user_Family_ID,
        spouse1,
        spouse2,
        decendant,
        marital_Status
    }

    const finalUserFamily = await FamilySchema(userFamily);
    const savedUserFamily = finalUserFamily.save();

    return savedUserFamily;

}