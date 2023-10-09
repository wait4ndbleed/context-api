"use client";

import { Context } from "@/contexts/Context";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Cadastro() {
  const { state, dispatch } = useContext(Context);
  const [nameInput, setNameInput] = useState(state.user.name);
  const [ageInput, setAgeInput] = useState(state.user.age);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeInput(parseInt(e.target.value));
  };

  const handleSave = () => {
    dispatch({
        type: 'CHANGE_NAME',
        payload: {
            name: nameInput
        }
    })
    dispatch({
        type: 'CHANGE_AGE',
        payload: {
            age: ageInput
        }
    })
  }

  return (
    <main>
      <h2>Alterar dados</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={handleNameChange}
      />
      <br />
      <input
        type="text"
        placeholder="Digite seu nome"
        value={ageInput}
        onChange={handleAgeChange}
      />
      <br />
      <button onClick={handleSave} className="mb-20">Salvar</button>
      <br />
      <Link href="/">Home</Link>
    </main>
  );
}
