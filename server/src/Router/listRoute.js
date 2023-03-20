import { Router } from "express";
import { add, remove, update } from "../Controller/listController.js";

export const listRouter = Router();

listRouter.post("/new", add);
listRouter.delete("/remove", remove);
listRouter.put("/done", update);
