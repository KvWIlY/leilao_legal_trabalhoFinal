"use client";
import { ChangeEvent, useState } from "react";

const Lances = () => {
  const [formData, setFormValues] = useState({
    lances: " ",
  });

  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/coin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Erro ao comprar lances");
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
          <p className="text-[20px]"> Digite a quantidade:</p>
          <input 
            type="number" 
            name="lances" 
            value={formData.lances} 
            onChange={handleChange} 
            required 
            className={`${input_style}`}  
          />
        </label>
        <br />
        <button
              type="submit"
              className="inline-block px-7 py-4 bg-purple-950 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Comprar
            </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Lances;
