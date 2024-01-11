import jwt from "jsonwebtoken"
import { Request, Response, NextFunction, RequestHandler } from "express"
import { appConfig } from "../../utils/config"

const jwtAuth: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token
  if (!token) {
    return res.sendStatus(403)
  }
  try {
    const user = jwt.verify(token, appConfig.jwtSecret)
    req.user = user
    next()
  } catch (err) {
    res.clearCookie("token")
    return res.sendStatus(403)
  }
}

export { jwtAuth }