import { Router } from "express";
import LocalityController from "../controllers/locality-controller";

const router = Router();

router.get('/localities/all', LocalityController.getAllLocalities);
router.get('/localities/streets/all', LocalityController.getAllStreets);
router.get('/localities/addresses/all', LocalityController.getAllAddressees);

export default router;