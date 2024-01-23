import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
// import { validacaoDosDados } from "../../shared/middlewares/validacao";
import { PrismaClient } from "@prisma/client";

export interface IUsers {
    uuid?: string;  
    email: string;
    nome: string;
    password: string;
    
}

const createUser = async ( request: Request<{}, {}, IUsers>, response: Response) => {
    const {uuid, nome, email, password} = request.body;
    const prisma = new PrismaClient()
    await prisma.listaDeCompras.create({
        data:{
            nome: nome,
            email: email,
            password: password
        }
    })
    response.status(StatusCodes.CREATED).send("Criado com sucesso");
};

export default { createUser};