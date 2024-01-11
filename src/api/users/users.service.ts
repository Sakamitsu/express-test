import { User } from "@prisma/client"
import { db } from "../../utils/db"
import { CreateUserDto } from "./dto/createUser.dto"
import { UpdateUserDto } from "./dto/updateUser.dto"


const usersService = {
  async create(user: CreateUserDto): Promise<User> {
    return db.user.create({
      data: user
    })
  },
  async findAll(): Promise<User[]> {
    return db.user.findMany()
  },
  async findOneById(userId: number): Promise<User> {
    return db.user.findFirst({
      where: {
        id: userId
      }
    })
  },
  async findOne(name: string): Promise<User> {
    return db.user.findFirst({
      where: {
        name
      }
    })
  },
  async update(user: UpdateUserDto): Promise<User> {
    return db.user.update({
      where: {
        id: user.id
      },
      data: user
    })
  },
  async delete(userId: number): Promise<void> {
    await db.user.delete({
      where: {
        id: userId
      }
    })
  }
}

export { usersService }