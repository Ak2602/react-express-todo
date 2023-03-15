import { Router } from "express";
import { addList, delList, updList } from "../controllers/listController.js";

export const listRouter = Router();

listRouter.post("/new", addList);
listRouter.delete("/remove", delList);
listRouter.put("/done", updList);
