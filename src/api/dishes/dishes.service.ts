import { Dish } from "@prisma/client"
import { db } from "../../utils/db"
import { CreateDishDto } from "./dto/createDish.dto"
import { UpdateDishDto } from "./dto/updateDish.dto"


const dishesService = {
  async create(dish: CreateDishDto): Promise<Dish> {
    return db.dish.create({
      data: dish
    })
  },
  async update(dish: UpdateDishDto): Promise<Dish> {
    return db.dish.update({
      where: {
        id: dish.id
      },
      data: dish
    })
  },
  async delete(dishId: number): Promise<void> {
    await db.dish.delete({
      where: {
        id: dishId
      }
    })
  }
}

export { dishesService }