import type { AcaoPacoteExcluir, PacoteType } from "./types";

export default function pacoteReducer(state: Array<PacoteType>, action: AcaoPacoteExcluir) {
    switch (action.type) {
        case "excluir":
            return state.filter(p => p.id !==action.id);
    
        default:
            return state;
    }
}