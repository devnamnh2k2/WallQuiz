import UserModel from "../models/user.model.js"

async function signInForUser(req, res) {

}

async function signUpForUser(req, res) {
    try {
        const { firstname, lastname, email, birthday, roles, password } = req.body;
    } catch (error) {
        
    }


}

async function forgotPassWordForUser(req, res) {

}

async function updateProfileForUser(req, res) {

}


async function handleLogOut(req, res) {

}

export default {
    signInForUser,
    signUpForUser,
    updateProfileForUser,
    forgotPassWordForUser,
    handleLogOut,
}