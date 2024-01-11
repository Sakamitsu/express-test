import { CreateUserDto } from '../users/dto/createUser.dto'
import jwt from 'jsonwebtoken'
import { appConfig } from "../../utils/config"


const authService = {
  createToken(user: CreateUserDto): string {
    return jwt.sign(user, appConfig.jwtSecret, { expiresIn: "1d" })
  }
}

export { authService }