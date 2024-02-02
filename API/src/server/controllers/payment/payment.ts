import { Request, Response } from "express";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import "dotenv/config";

interface IPayment{
    email:string;
    numeroDaConta:string; 
    valor:number; 
    moeda:string; 
    card:string; 
    descricao:string
}

const stripe = new Stripe(process.env.STRIPE_KEY || "");
const processarPagamento = async (req: Request<{}, {}, IPayment>, res: Response) => {
    const { email, numeroDaConta, valor, moeda, card, descricao } = req.body;
    const tipoDePagamento = obterMetodoPagamento(card)
    try {
        const prisma = new PrismaClient();
        // Verificar se o número da conta pertence ao proprietário
        const contaDoProprietario = await prisma.conta.findUnique({
            where: {
                userid: email,
                numero: numeroDaConta,
            },
        });
        if (!contaDoProprietario) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            sucesso: false,
            mensagem: "A conta especificada não encontrada.",
        });
        }
        // Crie um pagamento usando o Stripe
        const pagamento = await stripe.paymentIntents.create({
            amount: valor,
            currency: moeda,
            payment_method: tipoDePagamento,
            description: descricao,
            confirm: true,
            // receipt_email:destinatario
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never",
            },
        });

        const dataAtual = new Date();
        await prisma.pagamento.create({
          data: {
            pagamentoid: pagamento.id,
            proprietario:email,
            contaid: numeroDaConta,
            valor: pagamento.amount,
            moeda: pagamento.currency,
            descricao: pagamento.description,
            data: dataAtual,
          },
        });
        //conexão do Prisma quando terminar
        await prisma.$disconnect();

        res.status(StatusCodes.OK).json({
            sucesso: true,
            mensagem: "Pagamento processado com sucesso!",
        });
    } catch (error) {
        console.error("Erro ao processar o pagamento:", error);
        res.status(StatusCodes.NOT_ACCEPTABLE).json({
            sucesso: false,
            mensagem: "Erro ao processar o pagamento",
        });
    }
};

function obterMetodoPagamento(numeroCartao:string) {
    if (numeroCartao === "4242424242424242") {
        return "pm_card_visa";
    } else if (numeroCartao === "4000056655665556") {
        return "pm_card_visa_debit";
    } else if (numeroCartao === "5555555555554444") {
        return "pm_card_mastercard";
    } else if (numeroCartao === "2223003122003222") {
        return "pm_card_mastercard_debit";
    } else if(numeroCartao==="4000000760000002"){
        return 'pm_card_br'
    } else {
        return "pm_card_pt";
    }
}

export default { processarPagamento };
