export type PacoteType = {
  id: string;
  largura: number;
  altura: number;
  profundidade: number;
  peso: number;
}

export type PacoteProps = {
  pacote: PacoteType;
  onExcluir: () => void;
}