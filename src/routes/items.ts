import { Router } from "express";
import ItemsController from "../controllers/items-controller";

const router = Router();

router.get('/items/all', ItemsController.getAll);

export default router;