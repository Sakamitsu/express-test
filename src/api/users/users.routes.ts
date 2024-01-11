import express from 'express'
import { jwtAuth } from '../auth/jwtAuth.middleware'
import { usersController } from './users.controller'

const usersRouter = (router: express.Router) => {
  router.put("/users", jwtAuth, usersController.update)
  router.delete("/users/:id", jwtAuth, usersController.delete)
}

export { usersRouter }