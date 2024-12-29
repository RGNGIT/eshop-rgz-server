import { Request, Response } from "express";

const jsonString = '{"items":[{"name":"Футболка спортивная","image":"images/nike-shirt.jpg"},{"name":"Кроссовки","image":"images/adidas-sneakers.jpg"},{"name":"Шорты спортивные","image":"images/puma-shorts.jpg"},{"name":"Толстовка спортивная","image":"images/tnf.png"},{"name":"Кепка","image":"images/item5.jpg"},{"name":"Беговые брюки","image":"images/item6.jpg"},{"name":"Спортивный костюм","image":"images/item7.jpg"}]}';

class ItemController {
  async getAll(req: Request, res: Response) {
    res.json(JSON.parse(jsonString));
  }
}

export default new ItemController();