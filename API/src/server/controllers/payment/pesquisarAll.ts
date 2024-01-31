import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();
const pesuisarTodosHistoricoDePagamento = async (req: Request, res: Response) => {
  try {
    const historico = await prisma.pagamento.findMany();
    res.status(StatusCodes.OK).json({ sucesso: true, historico });
  } catch (error) {
    console.error('Erro ao obter o histórico de pagamento:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ sucesso: false, mensagem: 'Erro ao obter o histórico de pagamento' });
  }
};
export default {pesuisarTodosHistoricoDePagamento};
