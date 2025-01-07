import { Request, Response } from "express";
import VehicleService from '../services/vehicle-service';

class VehicleController {
  async getAllMarks(req: Request, res: Response) {
    const marks = await VehicleService.getAllMarks();
    res.json(marks);
  }

  async deleteMark(req: Request, res: Response) {
    const marks = await VehicleService.deleteMarkById(req.body.id);
    res.json(marks);
  }

  async getAllModels(req: Request, res: Response) {
    const vehicleModels = await VehicleService.getAllModels();
    res.json(vehicleModels);
  }

  async deleteModel(req: Request, res: Response) {
    const vehicleModels = await VehicleService.deleteModelById(req.body.id);
    res.json(vehicleModels);
  }

  async getAllVehicles(req: Request, res: Response) {
    const vehicles = await VehicleService.getAllVehicles();
    res.json(vehicles);
  }

  async createVehicle(req: Request, res: Response) {
    const vehicles = await VehicleService.createVehicle(req.body.data);
    res.json(vehicles);
  }

  async editVehicle(req: Request, res: Response) {
    const vehicles = await VehicleService.editVehicleById(req.body.id, req.body.data);
    res.json(vehicles);
  }

  async deleteVehicle(req: Request, res: Response) {
    const vehicles = await VehicleService.deleteVehicleById(req.body.id);
    res.json(vehicles);
  }
}

export default new VehicleController();