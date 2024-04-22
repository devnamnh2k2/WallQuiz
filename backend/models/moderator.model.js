import mongoose, { Schema } from "mongoose";

const moderatorSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
});

const ModeratorModel = mongoose.model("moderators", moderatorSchema);
export default ModeratorModel;
