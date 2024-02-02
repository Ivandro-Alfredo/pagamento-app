import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();
const pesquisarTodosHistoricoDePagamento = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    // Consultar histórico de pagamentos
    const historicoPagamentos = await prisma.pagamento.findMany({
      where: {
        proprietario: email,
      },
    });
    // Consultar histórico de transferências
    const historicoTransferencias = await prisma.transferencia.findMany({
      where: {
        proprietario: email,
      },
    });
    // Combinar os resultados de pagamentos e transferências
    const historico = [...historicoPagamentos, ...historicoTransferencias];
    // Ordenar o histórico por data
    historico.sort((a, b) => a.data.getTime() - b.data.getTime());
    res.status(StatusCodes.OK).json({ sucesso: true, historico });
  } catch (error) {
    console.error('Erro ao obter o histórico de pagamento:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ sucesso: false, mensagem: 'Erro ao obter o histórico de pagamento' });
  }finally{
    await prisma.$disconnect();
  }
};

export default { pesquisarTodosHistoricoDePagamento };

