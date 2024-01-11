import { db } from "../src/utils/db"

const defaultCategories = [
  { name: "Appetizers" },
  { name: "Soups and Salads" },
  { name: "Pasta and Noodles" },
  { name: "Burgers" },
  { name: "Pizza" },
  { name: "Desserts" },
  { name: "Kids' Menu" },
  { name: "Beverage" }
]

const seed = async () => {
  await db.category.createMany({
    data: defaultCategories
  })
} 

seed()