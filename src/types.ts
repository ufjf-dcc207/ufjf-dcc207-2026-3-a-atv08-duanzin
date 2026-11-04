export type PacoteType = {
  id: string;
  largura: number;
  altura: number;
  profundidade: number;
  peso: number;
}

export type PacoteProps = {
  pacote: PacoteType;
  dispacher: React.ActionDispatch<[action: AcaoPacoteExcluir]>;
}

export type AcaoPacoteExcluir = {
    type: string;
    id: string;
    dimensao: string;
}

export type ListagemDePacotesProps = {
    pacotes: Array<PacoteType>;
    dispacher: React.ActionDispatch<[action: AcaoPacoteExcluir]>;
}