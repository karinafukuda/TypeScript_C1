import { Negociacao } from './negociacao.js';

export class Negociacoes {
  //private negociacoes: Array<Negociacao> = []; ABAIXO É O MESMO
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {
  //   return this.negociacoes;
  // } ABAIXO É O MESMO

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
