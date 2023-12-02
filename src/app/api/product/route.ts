// Importando as bibliotecas necessárias
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
   // Extrai os dados do corpo da requisição
    const {
      nomeProduto,
      descricao,
      valorDeMercado,
      lancesOfertados,
    } = (await req.json()) as {
      nomeProduto: string;
      descricao: string;
      valorDeMercado: number;
      lancesOfertados: number;
    };

    // Cria o produto no banco de dados usando Prisma e associa ao usuário autenticado
    const produto = await prisma.produto.create({
      data: {
        nomeProduto,
        descricao,
        valorDeMercado,
        dataInicioLeilao: new Date(), 
      },
    });

    // Retorna uma resposta JSON com os dados do produto
    return NextResponse.json({
      produto: {
        nomeProduto: produto.nomeProduto,
        descricao: produto.descricao,
        valorDeMercado: produto.valorDeMercado,
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
    const produtos = await prisma.produto.findMany();
    return NextResponse.json(produtos);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Erro ao recuperar lista de Produtos " + error.message,
      }),
      { status: 500 }
    );
  }
}