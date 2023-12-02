import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";

export default async function Profile() {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    return (
        <section className="bg-ct-blue-600 pt-14 pb-4">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <h1 className="mb-3 text-3xl text-center font-semibold pb-3">
              Perfil do Usuário
            </h1>
            {!user ? (
              <div className="flex gap-2">
                <a href="../produtos">
                  <button
                    type="submit"
                    style={{ backgroundColor:"var(--primary-button-color)" }}
                    className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    >
                      Cadastrar Produtos
                  </button>
                </a>
                <a href="../produtos">
                  <button
                    type="submit"
                    style={{ backgroundColor:"var(--primary-button-color)" }}
                    className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    >
                      Comprar Lances
                  </button>
                </a>

              </div>
            ) : (
              <div className="flex items-center gap-8">
                <div>
                  <Image
                    src={user.image ? user.image : "/images/default.png"}
                    alt={`profile photo of ${user.name}`}
                    width={200}
                    height={250}
                  />
                </div>
                <div className="mt-8">
                  <p className="mb-3">Nome: {user.name}</p>
                  <p className="mb-3">Email: {user.email}</p>
                  <p className="mb-3">Lances: 10</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
}