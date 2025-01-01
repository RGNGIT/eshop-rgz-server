import { Request, Response } from "express";
import UserService from '../services/user-service';
import { User } from "src/models";
import { createToken } from "../utils";

class UserController {
  async register(req: Request, res: Response) {
    const user = req.body as User;

    let newUser = await UserService.getUserByLogin(user.login);
    if (newUser) {
      res.status(409).send("Пользователь с таким логином уже существует.");
      return;
    }

    newUser = await UserService.createUser(user);
    const token = createToken({ id: newUser.id });
    res.json({ token, fullName: `${newUser.last_name} ${newUser.name} ${newUser.middle_name}`, login: newUser.login });
  }

  async login(req: Request, res: Response) {
    const user = req.body as User;

    const foundYou = await UserService.getUserByLogin(user.login);
    if (!foundYou) {
      res.status(404).send("Неправильный логин и/или пароль.");
      return;
    }

    if (user.password == foundYou.password) {
      const token = createToken({ id: foundYou.id });
      res.json({ token, fullName: `${foundYou.last_name} ${foundYou.name} ${foundYou.middle_name}`, login: foundYou.login });
      return;
    }

    res.status(404).send("Неправильный логин и/или пароль.");
  }

  async getAll(req: Request, res: Response) {
    const allUsers = await UserService.getAllUsers();
    res.json(allUsers);
  }
}

export default new UserController();