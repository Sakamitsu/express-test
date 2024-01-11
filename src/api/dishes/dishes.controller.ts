import { Request, Response } from 'express'
import { dishesService } from './dishes.service'
import { CreateDishDto } from './dto/createDish.dto'
import { UpdateDishDto } from './dto/updateDish.dto'

const dishesController = {
  async create(req: Request, res: Response) {
    try {
      const dishDto = req.body as CreateDishDto
      if (!dishDto) {
        return res.sendStatus(400)
      }
      dishDto.categoryId = parseInt((dishDto.categoryId) as unknown as string, 10)
      const dish = await dishesService.create(dishDto)
      return res.status(200).json(dish)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  },
  async update(req: Request, res: Response) {
    try {
      const dishDto = req.body as UpdateDishDto
      if (!dishDto) {
        return res.sendStatus(400)
      }
      const updatedDish = await dishesService.update(dishDto)
      return res.status(200).json(updatedDish)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      if (Number.isNaN(id)) {
        return res.sendStatus(400)
      }
      await dishesService.delete(id)
      return res.sendStatus(200)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  } 
}

export { dishesController }