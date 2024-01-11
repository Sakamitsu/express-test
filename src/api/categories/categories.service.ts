import { db } from "../../utils/db"
import { CreateCategoryDto } from "./dto/createCategory.dto"
import { Category } from "@prisma/client"
import { UpdateCategoryDto } from "./dto/updateCategory.dto"


const categoriesService = {
  async create(category: CreateCategoryDto): Promise<Category> {
    return db.category.create({
      data: category
    })
  },
  async findAll(): Promise<Category[]> {
    return db.category.findMany({
      select: {
        id: true,
        name: true,
        dishes: true,
        createdAt: true,
        updatedAt: true
      }
    })
  },
  async findOneById(categoryId: number): Promise<Category> {
    return db.category.findFirst({
      where: {
        id: categoryId
      }
    })
  },
  async update(category: UpdateCategoryDto): Promise<Category> {
    return db.category.update({
      where: {
        id: category.id
      },
      data: category
    })
  },
  async delete(categoryId: number): Promise<void> {
    await db.category.delete({
      where: {
        id: categoryId
      }
    })
  }
}

export { categoriesService }
