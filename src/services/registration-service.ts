import { Registration } from "../models";

class RegistrationService {
  async createRegictration() {
    
  }

  async getAllRegistrations() {
    return Registration.findAll();
  }
}

export default new RegistrationService();