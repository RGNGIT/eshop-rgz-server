import { Router } from "express";
import ReportController from "../controllers/report-controller";

const router = Router();

router.get('/reports/1', ReportController.report1);
router.get('/reports/2/:id', ReportController.report2);
router.get('/reports/3/:id', ReportController.report3);
router.get('/reports/4/:countryId/:markId', ReportController.report4);

export default router;