import express from 'express'
import http from 'http'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import { appConfig } from './utils/config'
import { router } from './api/router'

const app = express()

app.use(cors({
  credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use('/api', router())

const server = http.createServer(app)

server.listen(appConfig.port, () => {
  console.log(`Server running on http://localhost:${appConfig.port}`)
})
