import mongoose, { Schema } from "mongoose";


const roleSchema = new Schema({
    type: String,
    rolename: String,
    permissions: [{ type: String }]
}, {
    timestamps: true
})

const RoleModel = mongoose.model("roles", roleSchema);

export default RoleModel;
