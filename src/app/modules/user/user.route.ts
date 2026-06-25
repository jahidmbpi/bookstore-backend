import { Router } from "express";
import { userController } from "./user.controllers";

const router = Router();

router.post("/createUser", userController.createuser);

export const userRouter = router;
