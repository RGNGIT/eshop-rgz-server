import { Request, Response } from "express";
import ResistrationService from '../services/registration-service';

class RegistrationController {
  async getAllRegistrations(req: Request, res: Response) {
    const registrations = await ResistrationService.getAllRegistrations();
    res.json(registrations);
  }

  async deleteRegistration(req: Request, res: Response) {
    const registrations = await ResistrationService.deleteRegistrationById(req.body.id);
    res.json(registrations);
  }

  async createRegistration(req: Request, res: Response) {

  }
}

export default new RegistrationController();