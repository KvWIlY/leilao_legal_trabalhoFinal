
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
     // Extrai os dados do corpo da requisição
      const {balance} = (await req.json()) as {
        balance: number;
      };
  
      // Cria o produto no banco de dados usando Prisma e associa ao usuário autenticado
      const coin = await prisma.coin.create({
        data: {
          balance,
        },
      });
  
      // Retorna uma resposta JSON com os dados do produto
      return NextResponse.json({
        coin: {
          balance: coin.balance,
        },
      });
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Erro ao cadastrar o produto.",
        }),
        { status: 500 }
      );
    }
  }

export async function GET(req: Request) {
    try {
      const coin = await prisma.coin.findMany();

      return NextResponse.json(coin);
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Erro ao recuperar balanco " + error.message,
        }),
        { status: 500 }
      );
    }
}