import { Negociacao } from './negociacao.js';

export class Negociacoes {
  //private negociacoes: Array<Negociacao> = []; ABAIXO É O MESMO
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {
  //   return this.negociacoes;
  // } ABAIXO É O MESMO

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
