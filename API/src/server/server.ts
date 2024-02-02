import express from 'express';
import {router} from './routers/users'
import {paymentRouter} from './routers/paymentRoutes'
import { contaRouter } from './routers/conta'
import 'dotenv/config'

const server = express()
server.use(express.json())
server.use('/user',router)
server.use('/pagamento',paymentRouter)
server.use('/conta',contaRouter)
export {server}