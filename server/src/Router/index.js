import { Router } from "express";
import { display } from "../Controller/indexController.js";

export const indexRouter = Router();

/* GET home page. */
indexRouter.get("/", display);
