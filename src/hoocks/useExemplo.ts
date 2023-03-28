import { useContext } from "react";
import { Contexto } from "../context"

function UseExample() {
    const context = useContext(Contexto);
    return context;
}

export default UseExample 