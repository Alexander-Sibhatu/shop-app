import express from 'express'
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
.post('/login', loginUser)
.post('/admin', adminLogin)

export default userRouter;