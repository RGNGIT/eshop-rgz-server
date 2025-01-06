import { Registration, User, Vehicle, VehicleMark, VehicleModel } from "../models";

class RegistrationService {
  async createRegistration() {

  }

  async getAllRegistrations() {
    return Registration.findAll({ include: [{ model: Vehicle, include: [{ model: VehicleModel, include: [{ model: VehicleMark }] }] }, { model: User }] });
  }

  async deleteRegistrationById(id) {
    return Registration.destroy({ where: { id: id } });
  }
}

export default new RegistrationService();