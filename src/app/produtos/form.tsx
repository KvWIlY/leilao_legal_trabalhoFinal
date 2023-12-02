"use client";
import { ChangeEvent, useState } from "react";

const CreateProduct = () => {
  const [formData, setFormValues] = useState({
    nomeProduto: '',
    descricao: '',
    valorDeMercado: 0,
    lancesOfertados: 0,
  });

  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormValues({
      nomeProduto: '',    
      descricao: '',
      valorDeMercado: 0,
      lancesOfertados: 0,
    });

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar o produto");
      }

      // Trate a resposta conforme necessário, por exemplo, redirecione para outra página
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const input_style =
    "form-control block w-full px-3 py-4 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="mt-10 text-[20px] text-black text-1xl">Nome do Produto</p>
          <input 
            type="text" 
            name="nomeProduto" 
            value={formData.nomeProduto} 
            onChange={handleChange} required 
            className={`${input_style}`}
            />
        </label>
        <label>
          <p className="mt-10 text-[20px] text-black text-1xl">Descrição</p>
          <textarea 
            name="descricao" 
            value={formData.descricao} 
            onChange={handleChange} 
            className={`${input_style}`}
            />
        </label>
        <label>
          <p className="mt-10 text-[20px] text-black text-2xl">Valor de Mercado</p>
          <input 
            type="number" 
            name="valorDeMercado" 
            value={formData.valorDeMercado} 
            onChange={handleChange} required 
            className={`${input_style}`}
            />
        </label>

        <label>
          <p className="mt-10 text-[20px] text-black text-2xl">Lances Ofertados:</p>
          <input 
            type="number" 
            name="lancesOfertados" 
            value={formData.lancesOfertados} 
            onChange={handleChange} required 
            className={`${input_style}`}
            />
        </label>
        <br />
          <button
              type="submit"
              className="inline-block px-7 py-4 bg-purple-950 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Cadastrar
            </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateProduct;
