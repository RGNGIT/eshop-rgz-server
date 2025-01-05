import { Router } from "express";
import RegistrationController from "../controllers/registration-controller";

const router = Router();

router.get('/registrations/all', RegistrationController.getAllRegistrations);

export default router;