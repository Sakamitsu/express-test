import * as dotenv from "dotenv"

dotenv.config()

const appConfig = {
  port: parseInt(process.env.PORT as string, 10),
  jwtSecret: process.env.JWT_SECRET as string
}

export { appConfig }