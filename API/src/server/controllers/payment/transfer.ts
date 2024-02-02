import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

const prisma = new PrismaClient();
const transferencia = async (req: Request, res: Response) => {
  try {
    const { proprietario, destinatario, valor } = req.body;
    // Verifica se as contas existem
    const contaOrigem = await prisma.conta.findUnique({
      where: { userid: proprietario },
    });
    const contaDestino = await prisma.conta.findUnique({
      where: { numero: destinatario },
    });

    if (!contaOrigem || !contaDestino) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Conta não encontrada' });
    }
    // Verifica se a conta de origem tem saldo suficiente
    if (contaOrigem.saldo < valor) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Saldo insuficiente' });
    }
    // Inicia a transação
    const dataAtual = new Date();
    await prisma.$transaction([ 
        prisma.transferencia.create({
            data: {
              proprietario: proprietario,
              contaid: destinatario,
              destinatario: contaDestino.proprietario,
              valor: valor,
              data: dataAtual
            },
          }),
        prisma.conta.update({
            where: { userid: proprietario },
            data: { saldo: { decrement: valor } },
        }),
        prisma.conta.update({
            where: { numero: destinatario },
            data: { saldo: { increment: valor } },
        }),
    ]);
    return res.status(StatusCodes.OK).json({ message: 'Transferência concluída com sucesso' });
  } catch (error) {
    console.error('Erro na transferência:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Erro na transferência' });
  } finally {
    await prisma.$disconnect(); 
  }
};

export default {transferencia};
