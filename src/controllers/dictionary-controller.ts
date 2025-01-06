import { Request, Response } from "express";
import dictionaryService from "../services/dictionary-service";

class DictionaryController {
  async getAllColors(req: Request, res: Response) {
    var colors = await dictionaryService.getAllColors();
    res.json(colors);
  }

  async deleteColor(req: Request, res: Response) {
    var colors = await dictionaryService.deleteColorById(req.body.id);
    res.json(colors);
  }

  async editColor(req: Request, res: Response) {
    var colors = await dictionaryService.editColorById(req.body.id, req.body.data);
    res.json(colors);
  }

  async getAllCarcasses(req: Request, res: Response) {
    var carcasses = await dictionaryService.getAllCarcasses();
    res.json(carcasses);
  }

  async deleteCarcass(req: Request, res: Response) {
    var carcasses = await dictionaryService.deleteCarcassById(req.body.id);
    res.json(carcasses);
  }

  async editCarcass(req: Request, res: Response) {
    var carcasses = await dictionaryService.editCarcassById(req.body.id, req.body.data);
    res.json(carcasses);
  }

  async getAllCountries(req: Request, res: Response) {
    var countries = await dictionaryService.getAllCountries();
    res.json(countries);
  }

  async deleteCountry(req: Request, res: Response) {
    var countries = await dictionaryService.deleteCountryById(req.body.id);
    res.json(countries);
  }

  async editCountry(req: Request, res: Response) {
    var countries = await dictionaryService.editColorById(req.body.id, req.body.data);
    res.json(countries);
  }

  async getAllVehicleTypes(req: Request, res: Response) {
    var vehicleTypes = await dictionaryService.getAllVehicleTypes();
    res.json(vehicleTypes);
  }

  async deleteVehicleType(req: Request, res: Response) {
    var vehicleTypes = await dictionaryService.deleteVehicleTypeById(req.body.id);
    res.json(vehicleTypes);
  }

  async editVehicleType(req: Request, res: Response) {
    var vehicleTypes = await dictionaryService.editVehicleTypeById(req.body.id, req.body.data);
    res.json(vehicleTypes);
  }

  async getAllLocalityTypes(req: Request, res: Response) {
    var localityTypes = await dictionaryService.getAllLocalityTypes();
    res.json(localityTypes);
  }

  async deleteLocalityType(req: Request, res: Response) {
    var localityTypes = await dictionaryService.deleteLocalityTypeById(req.body.id);
    res.json(localityTypes);
  }

  async editLocalityType(req: Request, res: Response) {
    var localityTypes = await dictionaryService.editLocalityTypeById(req.body.id, req.body.data);
    res.json(localityTypes);
  }

  async getAllStreetTypes(req: Request, res: Response) {
    var streetTypes = await dictionaryService.getAllStreetTypes();
    res.json(streetTypes);
  }

  async deleteStreetType(req: Request, res: Response) {
    var streetTypes = await dictionaryService.deleteStreetTypeById(req.body.id);
    res.json(streetTypes);
  }

  async editStreetType(req: Request, res: Response) {
    var streetTypes = await dictionaryService.editStreetTypeById(req.body.id, req.body.data);
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

  async getCarouselData(req: Request, res: Response) {
    res.json([
      {
        "name": "Супер компания по регистрации",
        "image": "images/1.jpg"
      },
      {
        "name": "Регистрирует на зашибись",
        "image": "images/2.jpg"
      },
      {
        "name": "Посмотри и убедись",
        "image": "images/3.jpg"
      }
    ]);
  }
}

export default new DictionaryController();