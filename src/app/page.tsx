"use client";

import { Context } from "@/contexts/Context";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { state } = useContext(Context);

  return (
    <main>
      {state.user.name && (
        <span className="block mb-20">
          Tela SignUp de {state.user.name} que tem {state.user.age} anos.
        </span>
      )}
      {!state.user.name && 'Não há informações'}
      <br />
      <Link href="/cadastro">Alterar cadastro</Link>
    </main>
  );
}
