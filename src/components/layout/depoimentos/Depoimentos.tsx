"use client";
import Image from 'next/image'
import React from "react";
import { Card } from "flowbite-react";
import CardImg from "@/assets/imgs/galo.png";
import CardImg2 from "@/assets/imgs/pato.png";
import CardImg3 from "@/assets/imgs/cheems&putin.png";
const Depoimentos = () => {
  return (
    <>
        <section className="mt-8 pt-15 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32">
        {/* 1 */}
          <Card className="bg-white z-10 shadow-sm">
              <div className="flex flex-col pb-10">
                <Image
                  src={CardImg}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />  
                <h5 className="mb-1 text-xl mt-2 font-medium text-gray-900 dark:text-white text-center">
                  Isadora
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Maranhão - ??
                </span>
                <p className="text-center mt-4">
                Um belo local para negociacões. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                </p>
              </div>
            </Card>
            {/* 2 */}
            <Card className="bg-white z-10 shadow-sm">
              <div className="flex flex-col pb-10">
                <Image
                    src={CardImg2}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                  />
                <h5 className="mb-1 text-xl font-medium mt-1 text-gray-900 dark:text-white text-center">
                  Irineu
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Rio de Janeiro - RJ
                </span>
                <p className="text-center mt-4">
                Reverência Nação, o leilão legal é a melhor escolha para conseguir arrematar um bom produto por um excelente preço. orem ipsum dolor sit amet, consectetur adipiscing elit 
                </p>
              </div>
            </Card>
            {/* 3 */}
            <Card className="bg-white z-10 shadow-sm">
              <div className="flex flex-col pb-10">
                <Image
                  src={CardImg3}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center mt-2">
                  Thomas 
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Belém - PA
                </span>
                <p className="text-center mt-4">
                um belo local para conseguir produtos de boa qualidade. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                </p>
              </div>
            </Card>
            <div className="col-span-3 flex justify-center">
              <button className="mt-3 p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
                Ver Todos
              </button>
        </div>
      </section>
    </>
  );
};

export default Depoimentos;