import { useContext } from "react";
import Contexto from "../context/Contexto";

export default function C() {
    const {nome,idade} = useContext(Contexto);
    return <><br /> Nome:{nome}<br/><br /> Idade:{idade}</>
}