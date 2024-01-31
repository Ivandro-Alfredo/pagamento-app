import { Request, Response } from 'express'
import Stripe from 'stripe';
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import 'dotenv/config'

const stripe = new Stripe(process.env.STRIPE_KEY || '');
const processarPagamento = async (req:Request, res:Response) => {
  const { valor, moeda, tipoDePagamento, descricao} = req.body;
  try {    
    // Crie um pagamento usando o Stripe
    const pagamento = await stripe.paymentIntents.create({
        amount: valor,
        currency: moeda,
        payment_method:tipoDePagamento ,
        description:descricao ,
        confirm: true,
        // receipt_email:destinatario
        // payment_method_types: [
        //     "card"
        //  ],
        automatic_payment_methods: {
          enabled: true,
          allow_redirects: 'never',
        },
    });

    // const prisma = new PrismaClient();
    // await prisma.pagamento.create({
    //   data: {
    //     pagamentoId: pagamento.id,
    //     valor: pagamento.amount,
    //     moeda: pagamento.currency,
    //     status: pagamento.status,
    //     // Outros campos que você deseja armazenar
    //   },
    // });

    res.status(StatusCodes.OK).json({ sucesso: true, mensagem: 'Pagamento processado com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar o pagamento:', error);
    res.status(StatusCodes.NOT_ACCEPTABLE).json({ sucesso: false, mensagem: 'Erro ao processar o pagamento' });
  }
};

export default { processarPagamento };
