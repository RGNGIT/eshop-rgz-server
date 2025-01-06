import { Request, Response } from "express";
import LocalityService from "../services/locality-service";

class LocalityController {
  async getAllLocalities(req: Request, res: Response) {
    const localities = await LocalityService.getAllLocalities();
    res.json(localities);
  }

  async deleteLocality(req: Request, res: Response) {
    const localities = await LocalityService.deleteLocalityById(req.body.id);
    res.json(localities);
  }

  async getAllStreets(req: Request, res: Response) {
    const streets = await LocalityService.getAllStreets();
    res.json(streets);
  }

  async deleteStreet(req: Request, res: Response) {
    const streets = await LocalityService.deleteStreetById(req.body.id);
    res.json(streets);
  }

  async getAllAddressees(req: Request, res: Response) {
    const addressees = await LocalityService.getAllAddresses();
    res.json(addressees);
  }

  async deleteAddress(req: Request, res: Response) {
    const addressees = await LocalityService.deleteAddressById(req.body.id);
    res.json(addressees);
  }
}

export default new LocalityController();