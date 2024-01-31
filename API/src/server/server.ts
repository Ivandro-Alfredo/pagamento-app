import express from 'express';
import {router} from './routers/users'
import {paymentRouter} from './routers/paymentRoutes'
import 'dotenv/config'

const server = express()
server.use(express.json())
server.use('/user',router)
server.use('/pagamento',paymentRouter)

export {server}