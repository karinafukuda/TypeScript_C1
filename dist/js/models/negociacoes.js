export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = []; ABAIXO É O MESMO
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    //   return this.negociacoes;
    // } ABAIXO É O MESMO
    lista() {
        return this.negociacoes;
    }
}
