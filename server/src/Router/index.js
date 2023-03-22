import { Router } from "express";
import { login } from "../Controller/indexController.js";

export const indexRouter = Router();

/* GET home page.*/

indexRouter.post("/", login);
// indexRouter.post("/:id", login);
