import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

const prisma = new PrismaClient();
const criarConta = async (req: Request, res: Response) => {
  try {
    const { email, proprietario, numero, saldo } = req.body;

    // Verifica se já existe uma conta com o mesmo número
    const contaExistente = await prisma.conta.findUnique({
      where: { numero: numero },
    });
    if (contaExistente) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Já existe uma conta com este número' });
    }
    // Cria a conta
    const novaConta = await prisma.conta.create({
      data: {
        userid: email,
        proprietario: proprietario,
        numero: numero,
        saldo: saldo,
      },
    });
    
    return res.status(StatusCodes.CREATED).json({ message: 'Conta criada com sucesso', conta: novaConta });
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Erro ao criar conta' });
  } finally {
    await prisma.$disconnect(); 
  }
};

export default { criarConta };
