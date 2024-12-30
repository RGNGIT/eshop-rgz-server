import UsersRouter from './users-router';
import DictionaryRouter from './dictionary-router'

export default function defineRouter(router) {
  router.use(DictionaryRouter);
  router.use(UsersRouter);
}