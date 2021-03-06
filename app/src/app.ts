import { Negociacao } from './models/negociacao.js';
import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    'Não foi possível inicializar a aplicação. Verifique se o form existe.'
  );
}

const btnImporta = document.querySelector('#botao-importa');
if (btnImporta) {
  btnImporta.addEventListener('click', () => {
    controller.importaDados();
  });
} else {
  throw Error('Botao importa não foi encontrado');
}
