"use client";

import Biglietto from "@/components/Biglietto";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const params = useParams<{ nome: string }>();
  const nome = params.nome.replaceAll("%20", " ");

  const [click, setClick] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
    setTimeout(function () {
      //your code to be executed after 3 seconds
      setShow(true);
    }, 1000);
  };

  return (
    <>
      {show && <Biglietto nome={nome} />}
      {!show && (
        <main
          className="w-full min-h-screen flex flex-col items-center justify-center bg-green-700 overflow-hidden"
          onClick={handleClick}
        >
          <h1
            className={!click ? "text-2xl uppercase text-slate-200" : "hidden"}
          >
            c&apos;è un regalo per te
          </h1>
          <h1
            className={
              !click ? "text-lg text-center uppercase text-slate-200" : "hidden"
            }
          >
            clicca sul pacco regalo per scoprirlo!
          </h1>
          <div className="relative">
            <Image
              src="/assets/top.png"
              alt="top"
              width={100}
              height={100}
              className={
                click
                  ? "-translate-y-80 lg:-translate-y-[1000px] translate-x-56 lg:translate-x-[1000px] transition duration-700 ease-in-out"
                  : "absolute"
              }
            />

            <Image
              src="/assets/bottom.png"
              alt="top"
              width={100}
              height={100}
              className={
                click
                  ? "translate-y-80 lg:translate-y-[1000px] transition duration-700 ease-in-out"
                  : ""
              }
            />
          </div>
        </main>
      )}
    </>
  );
}
