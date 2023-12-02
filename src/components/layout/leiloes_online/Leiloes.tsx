"use client";
import { useEffect, useState } from 'react';

interface Produto {
  id: number;
  nomeProduto: string;
  descricao: string;
}

export default function Leiloes() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product'); 
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);
    
  return (
      <div className="flex justify-center gap-2 text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
        dark:border-gray-700 ">
      {produtos.map((produto) => (
        <div key={produto.id}>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{produto.nomeProduto}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{produto.descricao}</p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
          >
            Dar um lançe
          </a>
        </div>
      ))}
    </div>
    )
}




