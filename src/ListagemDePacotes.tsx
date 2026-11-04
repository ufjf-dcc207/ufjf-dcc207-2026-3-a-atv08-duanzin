import { useState } from "react";
import type { ListagemDePacotesProps } from "./types";
import Pacote from "./Pacote";

export default function ListagemDePacotes({pacotes, acaoExcluir}: ListagemDePacotesProps) {
    const [ordenacao, setOrdenacao] = useState("peso");
    function mudaOrdenacao(evento) {
        setOrdenacao(evento.target.value);
    }

    return (
        <div>
            <div> Ordenar Por: {ordenacao}
                <select onChange={mudaOrdenacao}>
                    <option value="peso">peso</option>
                    <option value="altura">altura</option>
                    <option value="largura">largura</option>
                    <option value="profundidade">profundidade</option>
                </select>
            </div>
            <dl>
                {pacotes
                    .sort((x, y) => y[ordenacao] - x[ordenacao])
                    .map(p => (
                        <Pacote pacote={p} key={p.id} acaoExcluir={acaoExcluir} />
                    ))}
            </dl>
        </div>
    )
}