import express from 'express'
import authController from '../controllers/auth.controller.js';
const userRouter = express.Router();

userRouter.post("/signup",authController.signUpForUser);

export default userRouter;