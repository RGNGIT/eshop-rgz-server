import { Request, Response } from "express";
import { User } from "../models";

class UserController {
  async getAll(req: Request, res: Response) {
    res.json(User.findAll());
  }
}

export default new UserController();