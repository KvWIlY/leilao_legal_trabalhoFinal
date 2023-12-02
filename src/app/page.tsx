import DefaultCarousel from "@/components/layout/Carousel";
import Leiloes from "@/components/layout/leiloes_online/Leiloes";
import Depoimentos from "@/components/layout/depoimentos/Depoimentos";

export default function Home() {
  return (
    <div>
      <main>
        <section className="px-28">
          <DefaultCarousel />
          <div className="bg-purple-800 h-10 py-2 rounded-[10px]">
            <p className=" text-white pl-2 text-center text-[18px] ">
              Leilões Online
            </p>
          </div>
          <div className="flex justify-center py-2">
            <Leiloes />
          </div>
          <div className="col-span-3 flex justify-center">
          <button className="mb-5 mt-4 p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
            Ver Todos
          </button>
        </div>
        </section>
        <section id="depoimentos" className="flex flex-col items-center bg-purple-800 mt-6 rounded-[10px] ml-2 mr-3">
          <div className="mt-10 text-[35px] text-white text-2xl">Depoimentos</div>
          <Depoimentos/>
        </section>

      </main>
      <footer>
      </footer>
    </div>
  )
}
