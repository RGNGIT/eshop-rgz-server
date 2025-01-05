import { Router } from "express";
import DictionaryController from "../controllers/dictionary-controller";

const router = Router();

router.get('/dictionaries/colors/all', DictionaryController.getAllColors);
router.get('/dictionaries/carcasses/all', DictionaryController.getAllCarcasses);
router.get('/dictionaries/countries/all', DictionaryController.getAllCountries);
router.get('/dictionaries/vehicle-types/all', DictionaryController.getAllVehicleTypes);
router.get('/dictionaries/locality-types/all', DictionaryController.getAllLocalityTypes);
router.get('/dictionaries/street-types/all', DictionaryController.getAllStreetTypes);
router.delete('/dictionaries/colors/delete', DictionaryController.deleteColor);
router.delete('/dictionaries/carcasses/delete', DictionaryController.deleteCarcass);
router.delete('/dictionaries/countries/delete', DictionaryController.deleteCountry);
router.delete('/dictionaries/vehicle-types/delete', DictionaryController.deleteVehicleType);
router.delete('/dictionaries/locality-types/delete', DictionaryController.deleteLocalityType);
router.delete('/dictionaries/street-types/delete', DictionaryController.deleteStreetType);
router.post('/dictionaries/colors/create', DictionaryController.createColor);
router.post('/dictionaries/carcasses/create', DictionaryController.createCarcass);
router.post('/dictionaries/countries/create', DictionaryController.createCountry);
router.post('/dictionaries/vehicle-types/create', DictionaryController.createVehicleType);
router.post('/dictionaries/locality-types/create', DictionaryController.createLocalityType);
router.post('/dictionaries/street-types/create', DictionaryController.createStreetType);
router.get('/dictionaries/carousel', DictionaryController.getCarouselData);

export default router;