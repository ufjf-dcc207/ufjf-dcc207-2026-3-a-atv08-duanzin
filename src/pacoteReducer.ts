import type { AcaoPacoteExcluir, PacoteType } from "./types";

function acaoRepetir(state: Array<PacoteType>, action: AcaoPacoteExcluir) {
    if(action.dimensao === "altura") {
                return state.map(p => {
                    if(p.id === action.id) {
                        return {...p, profundidade: p.altura, largura: p.altura}
                    } else return p;
                });
            }
}

export default function pacoteReducer(state: Array<PacoteType>, action: AcaoPacoteExcluir) {
    switch (action.type) {
        case "excluir":
            return state.filter(p => p.id !==action.id);
        case "repetir":
            return acaoRepetir(state, action);
        default:
            return state;
    }
}