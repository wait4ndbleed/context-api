"use client";

import { Context } from "@/contexts/Context";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { state } = useContext(Context);

  return (
    <main>
      <div className="mb-20">
      {state.user.name && (
        <>
          Tela SignUp de {state.user.name} que tem {state.user.age} anos.
        </>
      )}
      {!state.user.name && "Não há informações"}
      </div>
      <Link href="/cadastro">Alterar cadastro</Link>
    </main>
  );
}
