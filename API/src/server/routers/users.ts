import { Router } from 'express';
import registarUser from '../controllers/users/create'
import verificarUser from '../controllers/users/login'

const router = Router();

router.get("/", (_, res) => {
    res.send("testando");
});

router.post('/registarUsuario',registarUser.createUser)
router.post('/login',verificarUser.login)

export {router}