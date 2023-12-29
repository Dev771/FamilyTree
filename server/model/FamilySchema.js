import mongoose from 'mongoose';

const FamilySchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    spouse1: {
        type: String,
    },
    spouse2: {
        type: String,
    },
    decendant: {
        type: [String],
        default: []
    },
    marital_Status: {
        type: String,
        default: "UnMarried"
    }
});

export default mongoose.model("FamilySchema", FamilySchema);