import { Request, Response } from "express";
import UserService from '../services/user-service';
import { User } from "src/models";
import { createToken, decodeToken } from "../utils";

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

  async getCurrentUserInfo(req: Request, res: Response) {
    const token = req.body.token;
    if (!token) {
      res.status(404).send("Get current info with token failed. No valid token.");
      return;
    }

    const decrypted = decodeToken(token);
    if (!decrypted) {
      res.status(404).send("Token decoding failed.");
      return;
    }

    var currentUserInfo = await UserService.getUserById(decrypted.id);
    res.json(currentUserInfo);
  }
}

export default new UserController();