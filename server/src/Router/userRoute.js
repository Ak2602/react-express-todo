import { Router } from "express";
import { display } from "../Controller/indexController.js";
import { userLogin } from "../controller/userController.js";

export const logRouter = Router();

logRouter.get("/", display);
logRouter.post("/user", userLogin);
