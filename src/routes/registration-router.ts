import { Router } from "express";
import RegistrationController from "../controllers/registration-controller";

const router = Router();

router.get('/registrations/all', RegistrationController.getAllRegistrations);
router.delete('/registrations/delete', RegistrationController.deleteRegistration);
router.post('/registrations/create', RegistrationController.createRegistration);
router.patch('/registrations/edit', RegistrationController.editRegistration);

export default router;