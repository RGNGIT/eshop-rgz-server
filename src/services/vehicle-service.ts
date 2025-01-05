import { Carcas, Color, Country, Vehicle, VehicleMark, VehicleModel, VehicleType } from "../models";

class VehicleService {
  async getAllMarks() {
    return VehicleMark.findAll({ include: [{ model: Country }] });
  }

  async getAllModels() {
    return VehicleModel.findAll({ include: [{ model: VehicleMark }] });
  }

  async getAllVehicles() {
    return Vehicle.findAll({ include: [{ model: Color }, { model: Carcas }, { model: VehicleModel }, { model: VehicleType }] });
  }
}

export default new VehicleService();