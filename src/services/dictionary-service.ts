import { Carcas, Color, Country, Locality, LocalityType, StreetType, Vehicle, VehicleType } from "../models";

class DictionaryService {
  async getAllColors() {
    return Color.findAll();
  }

  async deleteColorById(id) {
    return Color.destroy({ where: { id: id } });
  }

  async getAllCarcasses() {
    return Carcas.findAll();
  }

  async deleteCarcassById(id) {
    return Carcas.destroy({ where: { id: id } });
  }

  async getAllCountries() {
    return Country.findAll();
  }

  async deleteCountryById(id) {
    return Country.destroy({ where: { id: id } });
  }

  async getAllVehicleTypes() {
    return VehicleType.findAll();
  }

  async deleteVehicleById(id) {
    return Vehicle.destroy({ where: { id: id } });
  }

  async getAllLocalityTypes() {
    return LocalityType.findAll();
  }

  async deleteLocalityTypeById(id) {
    return Locality.destroy({ where: { id: id } });
  }

  async getAllStreetTypes() {
    return StreetType.findAll();
  }

  async deleteStreetTypeById(id) {
    return StreetType.destroy({ where: { id: id } });
  }

  async createColor(color) {
    return Color.create(color);
  }

  async createCarcass(carcas) {
    return Carcas.create(carcas);
  }

  async createCountry(country) {
    return Country.create(country);
  }

  async createVehicleType(vehicleType) {
    return VehicleType.create(vehicleType);
  }

  async createLocalityType(localityType) {
    return LocalityType.create(localityType);
  }

  async createStreetType(streetType) {
    return StreetType.create(streetType);
  }
}

export default new DictionaryService();