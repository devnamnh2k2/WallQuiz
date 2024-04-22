import mongoose, { Schema } from "mongoose";
const addressSchema = new Schema({
    country: {
        type: String,
        default: 'Vietnamese'
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    postcode: {
        type: Number,
    }
}, {
    timestamps: true
})


const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 3,
        match: /^[a-zA-Z]+w$/
    },
    lastname: {
        type: String,
        required: true,
        minLength: 1,
        match: /^[a-zA-Z]+w$/
    },
    displayname: {
        type: String,
        required: true,
        minLength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/

    },
    password: {
        type: String,
        minLength: 8,
    },
    avatar: {
        type: String,
        default: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713638525~exp=1713639125~hmac=7f3462c414093fe3b9a2a5918545d02799c7c19b344ec7cdccfb1bf6d055aacd"
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    birthday: {
        type: Date,
        required: true,
        validate: {
            validator: function (v) {
                return new Date().getFullYear() - v.getFullYear() >= 0;
            },
            message: 'Age must be at least 0 years old'
        }

    },
    address: addressSchema,
    roles: [
        {
            type: String,
            ref: 'roles'
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        enum: {
            values: ['Mr.', 'Ms.','Mrs.'],
            message: '{VALUE} is not supported'
          }
    },
    grade: {
        type: String
    },
    refreshToken: {
        type: String,
        default: 'no any refresh Token at this document.'
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('users', userSchema);
export default UserModel;
