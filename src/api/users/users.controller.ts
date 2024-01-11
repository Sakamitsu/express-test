import { Request, Response } from 'express'
import { UpdateUserDto } from './dto/updateUser.dto'
import { usersService } from './users.service'

const usersController = {
  async update(req: Request, res: Response) {
    try {
      const userDto = req.body as UpdateUserDto
      if (!userDto) {
        return res.sendStatus(400)
      }
      const updatedUser = await usersService.update(userDto)
      return res.status(200).json(updatedUser)
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
      await usersService.delete(id)
      return res.sendStatus(200)
    } catch (error: any) {
      return res.status(500).json(error.message)
    }
  } 
}

export { usersController }