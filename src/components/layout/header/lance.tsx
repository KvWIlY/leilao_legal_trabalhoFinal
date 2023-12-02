"use client";
import { useEffect, useState } from 'react';

interface Lances {
    balance: number;
    id:number;
}

export default function Leiloes() {
    const [lances, setLances] = useState<Lances[]>([]);

    const [totalBalance, setTotalBalance] = useState<number>(0)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/coin'); 
          const data = await response.json();
          setLances(data);

          const sum = data.reduce((acc: any, coin: { balance: any; }) => acc + coin.balance, 0);
          setTotalBalance(sum);

        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

    
    return (
        <div className="flex justify-center gap-4 text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-1 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lances: {totalBalance}
            </h5>
        </div>
      )
  }
