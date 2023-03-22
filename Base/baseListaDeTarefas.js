
// PORJETO BASE

// //  funcionalidades presisam estar dentro de um faction geral para não poderem ser exibidas no conlode do cliente
// // isso evita possiveis auterações e exibição nociva de regras de negicio internas.

// // ======================== //

// // ESSA ESTRUTURA SE CHAME IFE
// // (()=>{})();
// // SERVE PARA ENVOLVER O CODIGO E DIFICUTAR A EXIBIÇÃO DAS REGRAS DO NEEGOCIO.

// (() => {
//     const criarTarefa = (event) => {
//         event.preventDefault();

//         const lista = document.querySelector('[data-list]');
//         const input = document.querySelector('[data-form-input]');
//         const valor = input.value;

//         const tarefa = document.createElement('li');
//         tarefa.classList.add('task');
//         const conteudo = `<p class="content">${valor}</p>`;

//         tarefa.innerHTML = conteudo;

//         tarefa.appendChild(Botaoconclui());
//         tarefa.appendChild(BotaoDeleta());
//         lista.appendChild(tarefa);
//         input.value = " ";
//     }
//     const novaTarefa = document.querySelector('[data-form-button]');

//     novaTarefa.addEventListener('click', criarTarefa);

//     // crinado componentes = serve para criar uma aplicação

//     const Botaoconclui = () => {
//         const botaoconclui = document.createElement('button');

//         // crinado class
//         botaoconclui.classList.add('check-button');
//         botaoconclui.innerText = 'concluir'

//         botaoconclui.addEventListener('click', concluirTarefa)
//         return botaoconclui
//     }

//     const concluirTarefa = (event) => {
//         // evento que busco o auvo (event.target)
//         const botaoconclui = event.target
//         // pegando o parente mais proximo (o  Pai do botaõ)
//         const tarefaCompleta = botaoconclui.parentElement;
//         // colocar efeito // toggle metodo de busco css 
//         tarefaCompleta.classList.toggle('done');

//     }

//     const BotaoDeleta = ()=>{
//         const botaoDeleta = document.createElement('button');

//           // crinado class
//           botaoDeleta.classList.add('delet-button');
//           botaoDeleta.innerText = 'Deletar'

//         botaoDeleta.addEventListener('click', deletarTarefa);

//         return botaoDeleta;
//     }

//     const deletarTarefa = (event) =>{
//         const botaoDeleta = event.target;
//         const tarefaCompleta = botaoDeleta.parentElement;
// //  metodo de remoção de item da arvore
//         tarefaCompleta.remove();

//         return botaoDeleta;

//     }
// })();


// /*

//     Adicionar classe CSS utilizando o método toggle
//     Utilizar o atributo parentElement para subir um elemento na árvore do DOM
//     Encontrar o alvo do evento utilizando a propriedade target
//     Utilizar IIFE

// */ 