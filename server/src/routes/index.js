import { Router } from "express";
import { displayList } from "../controllers/indexController.js";

export const indexRouter = Router();

/* GET home page. */
indexRouter.get("/", displayList);
