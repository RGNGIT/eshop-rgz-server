import { Registration, User, Vehicle, VehicleMark, VehicleModel } from "../models";

class RegistrationService {
  async createRegistration() {

  }

  async getAllRegistrations() {
    return Registration.findAll({ include: [{ model: Vehicle, include: [{ model: VehicleModel, include: [{ model: VehicleMark }] }] }, { model: User }] });
  }
}

export default new RegistrationService();