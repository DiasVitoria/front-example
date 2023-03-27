import { useState } from "react";

function App() {
  const [nome,SetNome] = useState('Vitoria');
  const [idade,SetIdade] = useState(23);

  return (
    <div>
      <A />
      <B />
      <C />
      <div>Nome:{nome} Idade:{idade}</div>
    </div>
  );
}

export default App;

function A() {
  return <> Componente A</>;
}

function B() {
  return <> Componente B</>;
}

function C() {
  return <> Componente C</>;
}