import { Request, Response } from 'express'
import { CreateCategoryDto } from './dto/createCategory.dto'
import { categoriesService } from './categories.service'
import { UpdateCategoryDto } from './dto/updateCategory.dto'

const categoriesController = {
  async create(req: Request, res: Response) {
    try {
      const categoryDto = req.body as CreateCategoryDto
      if (!categoryDto) {
        return res.sendStatus(400)
      }
      const category = await categoriesService.create(categoryDto)
      return res.status(200).json(category)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  },
  async getAll(_: Request, res: Response) {
    try {
      const categories = await categoriesService.findAll()
      return res.status(200).json(categories)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  },
  async update(req: Request, res: Response) {
    try {
      const categoryDto = req.body as UpdateCategoryDto
      if (!categoryDto) {
        return res.sendStatus(400)
      }
      const updatedCategory = await categoriesService.update(categoryDto)
      return res.status(200).json(updatedCategory)
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
      await categoriesService.delete(id)
      return res.sendStatus(200)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  } 
}

export { categoriesController }