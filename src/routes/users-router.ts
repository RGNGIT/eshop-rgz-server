import { Router } from "express";
import UsersController from "../controllers/users-controller";

const router = Router();

router.get('/users/all', UsersController.getAll);

export default router;