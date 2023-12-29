import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        requried: true
    },
    gender: {
        type: String,
    },
    dob: {
        type: Date,
        default: Date.now()
    },
    personal_Family_ID: {
        type: [String],
        default: []
    },
    predecessor_Family_ID: {
        type: String
    },
    marital_Status: {
        type: String,
        default: "UnMarried"
    }

})

export default mongoose.model("UserSchema", UserSchema);