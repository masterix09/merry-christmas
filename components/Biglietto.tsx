import React from "react";
import Image from "next/image";

const Biglietto = ({ nome }: { nome: string }) => {
  return (
    <main className="min-h-screen bg-[url('/assets/background.png')] bg-center bg-cover flex items-center">
      <div className="wrapper flex flex-col lg:flex-row p-4 items-center gap-[100px] h-full ">
        <Image
          alt="babo natale"
          width={1000}
          height={1000}
          src="/assets/babbo-natale.png"
        />
        <div className="w-full lg:w-[35%] flex flex-col align-middle gap-7">
          <h1 className="text-center md:text-right text-[#FDFFF0] text-4xl font-bold">
            BUON NATALE
          </h1>
          <h1 className="text-center md:text-right text-[#FDFFF0] text-xl font-bold leading-relaxed">
            Ciao{" "}
            <span className="bold uppercase border-b-4 leading-loose text-2xl md:text-right">
              {nome}
            </span>
            , i miei migliori auguri di gioia e felicità per questo Natale e per
            tutto il Nuovo Anno.
          </h1>
          <h3 className="text-right text-[#FDFFF0] text-md">
            Da: <span className="text-lg italic border-b-4">Andrea Verde</span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Biglietto;
