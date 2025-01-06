import { Registration, User, Vehicle, VehicleMark, VehicleModel } from "../models";

class RegistrationService {
  async createRegistration(registration) {
    return Registration.create(registration);
  }

  async getAllRegistrations() {
    return Registration.findAll({ include: [{ model: Vehicle, include: [{ model: VehicleModel, include: [{ model: VehicleMark }] }] }, { model: User }] });
  }

  async deleteRegistrationById(id) {
    return Registration.destroy({ where: { id: id } });
  }

  async editRegistration(id, data) {
    return Registration.update(data, { where: { id: id } });
  }
}

export default new RegistrationService();