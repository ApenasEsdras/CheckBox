// importa arquivos de outros arquivo de forma segura.

import BotaoConclui from "./conponentes/concluiTarefa.js" 
import BotaoDeleta from "./conponentes/deletaTarefa.js" 

const criarTarefa = (event) => {
    event.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
}
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

/*
Utilizar import/export
Remover elementos do DOM com o método remove
Entender Same Origin Police e CORS
*/
