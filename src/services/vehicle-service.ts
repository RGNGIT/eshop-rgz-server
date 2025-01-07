import { Carcas, Color, Country, Vehicle, VehicleMark, VehicleModel, VehicleType } from "../models";

class VehicleService {
  async getAllMarks() {
    return VehicleMark.findAll({ include: [{ model: Country }] });
  }

  async deleteMarkById(id) {
    return VehicleMark.destroy({ where: { id: id } });
  }

  async getAllModels() {
    return VehicleModel.findAll({ include: [{ model: VehicleMark }] });
  }

  async deleteModelById(id) {
    return VehicleModel.destroy({ where: { id: id } });
  }

  async getAllVehicles() {
    return Vehicle.findAll({ include: [{ model: Color }, { model: Carcas }, { model: VehicleModel, include: [{ model: VehicleMark }] }, { model: VehicleType }] });
  }

  async deleteVehicleById(id) {
    return Vehicle.destroy({ where: { id: id } });
  }

  async editVehicleById(id, data) {
    return Vehicle.update(data, { where: { id: id } });
  }

  async createVehicle(vehicle) {
    return Vehicle.create(vehicle);
  }
}

export default new VehicleService();