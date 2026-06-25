import { Router } from "express";
const router = Router();
const userRouter = Router();
const moduleRoutes = [
    {
        path: "/user",
        route: userRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
//# sourceMappingURL=index.js.map