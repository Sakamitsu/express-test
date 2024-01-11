import express from 'express'
import { categoriesController } from './categories.controller'
import { jwtAuth } from '../auth/jwtAuth.middleware'

const categoriesRouter = (router: express.Router) => {
  router.get("/categories", categoriesController.getAll)
  router.post("/categories", jwtAuth, categoriesController.create)
  router.put("/categories", jwtAuth, categoriesController.update)
  router.delete("/categories/:id", jwtAuth, categoriesController.delete)
}

export { categoriesRouter }