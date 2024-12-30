import { Carcas, Color, Country, LocalityType, StreetType, VehicleType } from "../models";

class DictionaryService {
  async getAllColors() {
    return Color.findAll();
  }

  async getAllCarcasses() {
    return Carcas.findAll();
  }

  async getAllCountries() {
    return Country.findAll();
  }

  async getAllVehicleTypes() {
    return VehicleType.findAll();
  }

  async getAllLocalityTypes() {
    return LocalityType.findAll();
  }

  async getAllStreetTypes() {
    return StreetType.findAll();
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