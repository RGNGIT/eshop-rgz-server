import { Request, Response } from "express";
import dictionaryService from "../services/dictionary-service";

class DictionaryController {
  async getAllColors(req: Request, res: Response) {
    var colors = await dictionaryService.getAllColors();
    res.json(colors);
  }

  async getAllCarcasses(req: Request, res: Response) {
    var carcasses = await dictionaryService.getAllCarcasses();
    res.json(carcasses);
  }

  async getAllCountries(req: Request, res: Response) {
    var countries = await dictionaryService.getAllCountries();
    res.json(countries);
  }

  async getAllVehicleTypes(req: Request, res: Response) {
    var vehicleTypes = await dictionaryService.getAllVehicleTypes();
    res.json(vehicleTypes);
  }

  async getAllLocalityTypes(req: Request, res: Response) {
    var localityTypes = await dictionaryService.getAllLocalityTypes();
    res.json(localityTypes);
  }

  async getAllStreetTypes(req: Request, res: Response) {
    var streetTypes = await dictionaryService.getAllStreetTypes();
    res.json(streetTypes);
  }

  async createColor(req: Request, res: Response) {
    var color = await dictionaryService.createColor(req.body);
    res.json(color);
  }

  async createCarcass(req: Request, res: Response) {
    var carcas = await dictionaryService.createCarcass(req.body);
    res.json(carcas);
  }

  async createCountry(req: Request, res: Response) {
    var country = await dictionaryService.createCountry(req.body);
    res.json(country);
  }

  async createVehicleType(req: Request, res: Response) {
    var vehicleType = await dictionaryService.createVehicleType(req.body);
    res.json(vehicleType);
  }

  async createLocalityType(req: Request, res: Response) {
    var localityType = await dictionaryService.createLocalityType(req.body);
    res.json(localityType);
  }

  async createStreetType(req: Request, res: Response) {
    var streetType = await dictionaryService.createStreetType(req.body);
    res.json(streetType);
  }
}

export default new DictionaryController();