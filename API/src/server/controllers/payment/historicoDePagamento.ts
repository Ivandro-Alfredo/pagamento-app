import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();
const pesquisarHistoricoDePagamento = async (req: Request, res: Response) => {
    try {
        const { email, data } = req.body;
        const dataFormatada = new Date(data).toISOString();
        const proximoDia = new Date(
            new Date(data).getTime() + 24 * 60 * 60 * 1000
        );
        const proximoDiaFormatado = proximoDia.toISOString();
        const historicoPagamentos = await prisma.pagamento.findMany({
            where: {
                proprietario: email,
                data: {
                    gte: dataFormatada, // maior ou igual à data
                    lt: proximoDiaFormatado, // menor que a data do próximo dia
                },
            },
        });
        const historicoTransferencias = await prisma.transferencia.findMany({
            where: {
                proprietario: email,
                data: {
                    gte: dataFormatada, // maior ou igual à data
                    lt: proximoDiaFormatado, // menor que a data do próximo dia
                },
            },
        });
        // Combinar os resultados de pagamentos e transferências
        const historicoAtividades = [
            ...historicoPagamentos,
            ...historicoTransferencias,
        ];
        // Ordenar o histórico por data
        historicoAtividades.sort((a, b) => a.data.getTime() - b.data.getTime());
        res.status(StatusCodes.OK).json({ sucesso: true, historicoAtividades });
    } catch (error) {
        console.error("Erro ao obter o histórico de pagamento:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            sucesso: false,
            mensagem: "Erro ao obter o histórico de pagamento",
        });
    } finally {
        await prisma.$disconnect();
    }
};

export default { pesquisarHistoricoDePagamento };
