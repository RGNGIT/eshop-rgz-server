import UsersRouter from './users-router';
import DictionaryRouter from './dictionary-router'
import LocalityRouter from './locality-router';
import VehicleRouter from './vehicle-router';

export default function defineRouter(router) {
  router.use(DictionaryRouter);
  router.use(UsersRouter);
  router.use(LocalityRouter);
  router.use(VehicleRouter);
}