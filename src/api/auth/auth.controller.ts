import { Request, Response } from 'express'
import { CreateUserDto } from '../users/dto/createUser.dto'
import { usersService } from '../users/users.service'
import { authService } from './auth.service'

const authController = {
  async login(req: Request, res: Response) {
    const userPayload = req.body as CreateUserDto

    let user = await usersService.findOne(userPayload.name)

    if (!user) {
      user = await usersService.create(userPayload)
    }
    
    if (user.password !== userPayload.password) {
      return res.status(403).json({
        error: "invalid login or password"
      })
    }
    
    res.cookie("token", authService.createToken(userPayload))

    res.status(200).json(user)
  } 
}

export { authController }