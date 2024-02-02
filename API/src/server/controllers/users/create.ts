import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export interface IUsers {
  uuid?: string;
  email: string;
  nome: string;
  password: string;
}

const prisma = new PrismaClient();
const createUser = async (request: Request<{}, {}, IUsers>, response: Response) => {
  try {
    const { nome, email, password } = request.body;
    // Hash da senha antes de salvar no banco de dados
    const senhaHash = await bcrypt.hash(password, 10);
    const novoUsuario = await prisma.user.create({
      data: {
        nome: nome,
        email: email,
        password: senhaHash, 
      },
    }); 
    // Gera um token JWT para o novo usuário
    const token = jwt.sign({ usuario: novoUsuario.email }, process.env.JWT_SECRET_KEY|| 'secret');
    response.status(StatusCodes.CREATED).json({ sucesso: true, mensagem: "Usuário criado com sucesso", token });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ sucesso: false, mensagem: "Erro ao criar usuário" });
  }finally{
    await prisma.$disconnect();
  }
};

export default { createUser };