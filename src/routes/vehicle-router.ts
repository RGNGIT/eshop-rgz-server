import { Router } from "express";
import VehicleController from "../controllers/vehicle-controller";

const router = Router();

router.get('/vehicles/all', VehicleController.getAllVehicles);
router.get('/vehicles/marks/all', VehicleController.getAllMarks);
router.get('/vehicles/models/all', VehicleController.getAllModels);

export default router;