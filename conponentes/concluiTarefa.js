
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    // crinado class
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (event) => {
    // evento que busco o auvo (event.target)
    const botaoConclui = event.target;
    // pegando o parente mais proximo (o  Pai do botaõ)
    const tarefaCompleta = botaoConclui.parentElement;
    // colocar efeito // toggle metodo de busco css 
    tarefaCompleta.classList.toggle('done');
}

// para manter a segurança no codigo presisamos de armazanalo em um modulo.
// exportar a função de forma segura para outros arquivos (sisteam de rotas)
export default BotaoConclui;


