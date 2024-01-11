import express from 'express'
import { categoriesRouter } from './categories/categories.routes'
import { authRouter } from './auth/auth.routes'
import { dishesRouter } from './dishes/dishes.routes'
import { usersRouter } from './users/users.routes'

const router = () => {
  const router = express.Router()
  authRouter(router)
  categoriesRouter(router)
  dishesRouter(router)
  usersRouter(router)
  return router
}

export { router }