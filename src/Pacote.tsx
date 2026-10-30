import "./Pacote.css"
import type { PacoteProps } from "./types.ts"

export default function Pacote({pacote, onExcluir}: PacoteProps ) {
    return (
        <div className="pacote">
            <dt>id</dt>
            <dd title={pacote.id}>{pacote.id.substring(0,8)}</dd>
            <dd>
                <button onClick={onExcluir}>Excluir</button>
            </dd>
            <dt>Largura (cm)</dt>
            <dd>{pacote.largura}</dd>
            <dt>Altura (cm)</dt>
            <dd>{pacote.altura}</dd>
            <dt>Profundidade (cm)</dt>
            <dd>{pacote.profundidade}</dd>
            <dt>Cubagem(metro quadrado)</dt>
            <dd>
                {
                    400 * pacote.largura/100 * pacote.altura/100 * pacote.profundidade/100
                }
            </dd>
            <dt>Peso (kg)</dt>
            <dd>{pacote.peso}</dd>
        </div>)
}