import { Router } from "express";
import RegistrationController from "../controllers/registration-controller";

const router = Router();

router.get('/registrations/all', RegistrationController.getAllRegistrations);
router.delete('/registrations/delete', RegistrationController.deleteRegistration);

export default router;