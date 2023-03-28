import UseExample from "../hoocks/useExemplo";

export default function C() {
    const { nome, idade} = UseExample();
    return <><br /> Nome: {nome}<br/><br /> Idade: {idade}</>
}