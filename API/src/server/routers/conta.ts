import { Router } from "express";
import conta from "../controllers/conta/conta";

const contaRouter = Router();

contaRouter.get("/", (_, res) => {
    res.send("testando routa de pagamentos");
});

contaRouter.post("/create", conta.criarConta);

export { contaRouter };
