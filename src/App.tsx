import { createContext, useContext, useState } from "react";
import A from "./components/A";
import Contexto from "./context/Contexto";


function App() {
  const [nome, SetNome] = useState('');
  const [idade, SetIdade] = useState('');

  return (
    <Contexto.Provider value={{nome,idade}}>
      <div>
        <h1>Digite seu nome aqui: </h1>
        <label htmlFor="">Nome: </label><br />
        <input value={nome} onChange={(e) => SetNome(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="">Idade: </label><br />
        <input type="text" value={idade} onChange={(e) => SetIdade(e.target.value)} />
      </div>
      <A />
    </Contexto.Provider>
  );
}


export default App;
