import express from "express";
import user from '../server/routers/users'
import 'dotenv/config'

const server = express()
server.use(express.json())
server.use('./userRoutes',user)

export {server}

