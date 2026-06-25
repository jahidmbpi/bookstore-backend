import { Router } from "express";
import { authcontroller } from "./auth.controllers";

const router = Router();

router.post("/logIn", authcontroller.logIn);

export const authRouter = router;
