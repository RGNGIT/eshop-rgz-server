import { Router } from "express";
import VehicleController from "../controllers/vehicle-controller";

const router = Router();

router.get('/vehicles/all', VehicleController.getAllVehicles);
router.get('/vehicles/marks/all', VehicleController.getAllMarks);
router.get('/vehicles/models/all', VehicleController.getAllModels);
router.delete('/vehicles/delete', VehicleController.deleteVehicle);
router.delete('/vehicles/marks/delete', VehicleController.deleteMark);
router.delete('/vehicles/models/delete', VehicleController.deleteModel);
router.post('/vehicles/create', VehicleController.createVehicle);
router.patch('/vehicles/edit', VehicleController.editVehicle);

export default router;