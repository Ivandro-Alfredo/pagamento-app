import { Router } from "express";
import pagamento from "../controllers/payment/payment";
import historico from "../controllers/payment/historicoDePagamento";
import todosHistorico from "../controllers/payment/pesquisarAll";
import transferencia from "../controllers/payment/transfer";

const paymentRouter = Router();

paymentRouter.get("/", (_, res) => {
    res.send("testando routa de pagamentos");
});

paymentRouter.post("/processar", pagamento.processarPagamento);
paymentRouter.post("/historico", historico.pesquisarHistoricoDePagamento);
paymentRouter.get("/pesuisar_all", todosHistorico.pesquisarTodosHistoricoDePagamento);
paymentRouter.post("/transferencia",transferencia.transferencia)

export { paymentRouter };
