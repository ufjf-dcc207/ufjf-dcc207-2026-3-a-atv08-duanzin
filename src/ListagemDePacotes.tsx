import { useState } from "react";
import type { PacoteType } from "./types";

type ListagemDePacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id:string) => void;
}

export default function ListagemDePacotes({pacotes, acaoExcluir}: ListagemDePacotesProps) {
    const [ordenacao, setOrdenacao] = useState("peso");
    function mudaOrdenacao(evento) {
        setOrdenacao(evento.target.value);
    }
}