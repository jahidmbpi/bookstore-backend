import { Router } from "express";
import { authcontroller } from "./auth.controllers";

const router = Router();

router.post("/logIn", authcontroller.logIn);
router.post("/logOut", authcontroller.logOut);

export const authRouter = router;
