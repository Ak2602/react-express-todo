import { Router } from "express";
import { userLogin } from "../controller/userController.js";

export const userRouter = Router();

userRouter.get("/list/:id", userLogin);
