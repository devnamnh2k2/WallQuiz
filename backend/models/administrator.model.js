import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})

const AdminModel = mongoose.model("administrators", adminSchema);
export default AdminModel;
