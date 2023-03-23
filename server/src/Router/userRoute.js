import { Router } from "express";
import { userLogin } from "../controller/userController.js";

export const logRouter = Router();

logRouter.get("/list/:id", userLogin);
