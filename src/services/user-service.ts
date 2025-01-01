import { User } from "../models";

class UserService {
  async getAllUsers() {
    return User.findAll();
  }

  async getUserByLogin(login: string) {
    return User.findOne({ where: { login } });
  }

  async getUserById(id: number) {
    return User.findOne({ where: { id } });
  }

  async createUser(user) {
    return User.create(user);
  }
}

export default new UserService();