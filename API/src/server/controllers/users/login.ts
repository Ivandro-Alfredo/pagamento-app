import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

interface ILogin {
    email: string;
    password: string;
}

const login = async (req: Request<{}, {}, ILogin>, res: Response) => {
  try {
    const { email, password } = req.body;
    const prisma = new PrismaClient();
    const usuario = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log(usuario)
    if (!usuario) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ sucesso: false, mensagem: "Usuário não encontrado" });
    }
    // Verificar a senha
    const senhaCorreta = await bcrypt.compare(password, usuario.password);
    if (senhaCorreta) {
      // Gera um token JWT para o usuário
      const token = jwt.sign({ usuario: usuario.email }, process.env.JWT_SECRET_KEY|| 'secret');
      res.status(StatusCodes.OK).json({ sucesso: true, mensagem: "Login bem-sucedido", token });
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({ sucesso: false, mensagem: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(StatusCodes.UNAUTHORIZED).json({ sucesso: false, mensagem: "Erro no login" });
  }
};

export default { login };