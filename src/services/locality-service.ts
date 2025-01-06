import { Address, Locality, LocalityType, Street, StreetType, User } from "../models";

class LocalityService {
  async getAllLocalities() {
    return Locality.findAll({ include: [{ model: LocalityType }] });
  }

  async deleteLocalityById(id) {
    return Locality.destroy({ where: { id: id } });
  }

  async getAllStreets() {
    return Street.findAll({ include: [{ model: StreetType }] });
  }

  async deleteStreetById(id) {
    return Street.destroy({ where: { id: id } });
  }

  async getAllAddresses() {
    return Address.findAll({ include: [{ model: User }, { model: Street }, { model: Locality }] });
  }

  async deleteAddressById(id) {
    return Address.destroy({ where: { id: id } });
  }

  async editAddressById(id, data) {
    return Address.update(data, { where: { id: id } });
  }

  async createAddressById(address) {
    return Address.create(address);
  }
}

export default new LocalityService();