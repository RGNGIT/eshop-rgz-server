import { Address, Locality, LocalityType, Street, StreetType, User } from "../models";

class LocalityService {
  async getAllLocalities() {
    return Locality.findAll({ include: [{ model: LocalityType }] });
  }

  async getAllStreets() {
    return Street.findAll({ include: [{ model: StreetType }] });
  }

  async getAllAddresses() {
    return Address.findAll({ include: [{ model: User }, { model: Street }, { model: Locality }] });
  }
}

export default new LocalityService();