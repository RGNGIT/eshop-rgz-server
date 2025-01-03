import { Router } from "express";
import UsersController from "../controllers/users-controller";

const router = Router();

router.get('/users/all', UsersController.getAll);
router.post('/users/register', UsersController.register);
router.post('/users/login', UsersController.login);
router.post('/users/current', UsersController.getCurrentUserInfo);

export default router;