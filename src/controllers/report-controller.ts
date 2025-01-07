import { Request, Response } from "express";
import RegistrationService from "../services/registration-service";

class ReportController {
  async report1(req: Request, res: Response) {
    const registrations = await RegistrationService.getAllRegistrations();
    const mappedResult = registrations?.map((e) => ({
      ИД: e.id,
      "Номер": e.number,
      "Дата": e.date,
      "Транспортное средство": `${e.vehicle.vehicle_model?.vehicle_mark?.name} ${e.vehicle.vehicle_model?.name} (${e.vehicle.vehicle_model?.vehicle_mark?.short_name}, ${e.vehicle.vehicle_model?.short_name})`,
      "Владелец": `${e.user.last_name} ${e.user.name} ${e.user.middle_name}`,
      "Серия паспорта": e.user.passport_serial,
      "Номер паспорта": e.user.passport_number,
      "Цвет": e.vehicle.color?.name,
      "Тип кузова": e.vehicle.carcas?.name,
      "Страна": e.vehicle.vehicle_model?.vehicle_mark?.country?.name
    }));

    res.json(mappedResult);
  }

  async report2(req: Request, res: Response) {
    const userId = Number(req.params.id);
    if (!userId) {
      res.status(404).send("No user");
      return;
    }

    const registrations = await RegistrationService.getAllRegistrations();
    const mappedResult = registrations?.filter(e => e.user.id == userId )?.map((e) => ({
        ИД: e.id,
        "Номер": e.number,
        "Дата": e.date,
        "Транспортное средство": `${e.vehicle.vehicle_model.vehicle_mark.name} ${e.vehicle.vehicle_model.name} (${e.vehicle.vehicle_model.vehicle_mark.short_name}, ${e.vehicle.vehicle_model.short_name})`
      }));

    res.json(mappedResult);
  }

  async report3(req: Request, res: Response) {
    const vehicleId = Number(req.params.id);
    if (!vehicleId) {
      res.status(404).send("No vehicle");
      return;
    }

    const registrations = await RegistrationService.getAllRegistrations();
    const mappedResult = registrations?.filter(e => e.vehicle.id == vehicleId )?.map((e) => ({
        ИД: e.id,
        "Номер": e.number,
        "Дата": e.date,
        "Владелец": `${e.user.last_name} ${e.user.name} ${e.user.middle_name}`
      }));

    res.json(mappedResult);
  }

  async report4(req: Request, res: Response) {
    const countryId = Number(req.params.countryId);
    if (!countryId) {
      res.status(404).send("No country");
      return;
    }

    const markId = Number(req.params.markId);
    if (!markId) {
      res.status(404).send("No mark");
      return;
    }

    const registrations = await RegistrationService.getAllRegistrations();
    const mappedResult = registrations?.filter(e => e.vehicle.vehicle_model.vehicle_mark.id == markId && e.vehicle.vehicle_model.vehicle_mark.country_id == countryId)?.map((e) => ({
        ИД: e.id,
        "Номер": e.number,
        "Дата": e.date,
        "Транспортное средство": `${e.vehicle.vehicle_model.vehicle_mark.name} ${e.vehicle.vehicle_model.name} (${e.vehicle.vehicle_model.vehicle_mark.short_name}, ${e.vehicle.vehicle_model.short_name})`,
        "Владелец": `${e.user.last_name} ${e.user.name} ${e.user.middle_name}`
      }));

    res.json(mappedResult);
  }
}

export default new ReportController();