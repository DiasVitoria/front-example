import UseExample from "../hoocks/useExemplo";
import B from "./B";

 function A() {
    const { nome, idade, setNome, setIdade } = UseExample();
    return (
        <>
            <div>
                <label>Nome</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
                <label>Idade</label>
                <input value={idade} onChange={(e) => setIdade(e.target.value)} />
            </div>
            <B />
        </>
    )

}

export default A;