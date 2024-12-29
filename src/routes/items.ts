import { Router } from "express";
import ItemsController from "../controllers/items-controller";

const router = Router();

router.get('/items/trending', ItemsController.getTrending);

export default router;