import express from 'express'
import { authController } from './auth.controller'

const authRouter = (router: express.Router) => {
  router.post("/login", authController.login)
}

export { authRouter }