export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
// export class Negociacao {
//   private _data: Date;
//   private _quantidade: number;
//   private _valor: number;
//   constructor(data: Date, quantidade: number, valor: number) {
//     this._data = data;
//     this._quantidade = quantidade;
//     this._valor = valor;
//   }
//   get data(): Date {
//     return this._data;
//   }
//   get quantidade(): number {
//     return this._quantidade;
//   }
//   get valor(): number {
//     return this._valor;
//   }
//   get volume(): number {
//     return this._quantidade * this._valor;
//   }
// } OUTRA FORMA DE FAZER
