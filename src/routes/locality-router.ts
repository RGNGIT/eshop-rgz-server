import { Router } from "express";
import LocalityController from "../controllers/locality-controller";

const router = Router();

router.get('/localities/all', LocalityController.getAllLocalities);
router.get('/localities/streets/all', LocalityController.getAllStreets);
router.get('/localities/addresses/all', LocalityController.getAllAddressees);
router.delete('/localities/delete', LocalityController.deleteLocality);
router.delete('/localities/streets/delete', LocalityController.deleteStreet);
router.delete('/localities/addresses/delete', LocalityController.deleteAddress);
router.post('/localities/addresses/create', LocalityController.createAddress);
router.patch('/localities/addresses/edit', LocalityController.editAddress);

export default router;