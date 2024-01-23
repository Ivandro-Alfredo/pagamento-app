import { Express, Response,Request, RequestParamHandler} from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

interface ILogin{
    email: number;
    password: number;
}

const login = async (req: Request<{},{},{},ILogin>, res: Response)=>{
    const prisma = new PrismaClient();
    const result = await prisma.listaDeCompras.unique({});
    if(result!== null) res.status(StatusCodes.OK).send(result);
    return res.status(StatusCodes.NO_CONTENT).json("Nenhum resultado encontrado.");
}

export default {login}