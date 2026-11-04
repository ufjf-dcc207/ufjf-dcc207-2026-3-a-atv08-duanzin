export type PacoteType = {
  id: string;
  largura: number;
  altura: number;
  profundidade: number;
  peso: number;
}

export type PacoteProps = {
  pacote: PacoteType;
  acaoExcluir: (id: string)=>void;
}

export type ListagemDePacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id:string) => void;
}