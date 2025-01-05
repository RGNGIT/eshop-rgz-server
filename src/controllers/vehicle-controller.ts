import { Request, Response } from "express";
import VehicleService from '../services/vehicle-service';

class VehicleController {
  async getAllMarks(req: Request, res: Response) {
    const marks = await VehicleService.getAllMarks();
    res.json(marks);
  }

  async getAllModels(req: Request, res: Response) {
    const vehicleModels = await VehicleService.getAllModels();
    res.json(vehicleModels);
  }

  async getAllVehicles(req: Request, res: Response) {
    const vehicles = await VehicleService.getAllVehicles();
    res.json(vehicles);
  }
}

export default new VehicleController();