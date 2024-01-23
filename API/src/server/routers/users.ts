import { Router } from 'express';
import registarUser from '../controllers/users/create'
import verificarUser from '../controllers/users/create'


const router = Router();

router.get("/", (_, res) => {
    res.send("testando");
});

router.post('/registarUsuario',registarUser.createUser)
router.get('/login',verificarUser.login))

export default {router}