import express from 'express'
import { jwtAuth } from '../auth/jwtAuth.middleware'
import { dishesController } from './dishes.controller'

const dishesRouter = (router: express.Router) => {
  router.post("/dishes", jwtAuth, dishesController.create)
  router.put("/dishes", jwtAuth, dishesController.update)
  router.delete("/dishes/:id", jwtAuth, dishesController.delete)
}

export { dishesRouter }