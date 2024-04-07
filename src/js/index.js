

const botao_mostrar_projetos = document.querySelector('.btn-mostrar-projetos');
const projetos_inativos = document.querySelectorAll('.projeto:not(.ativo)')

botao_mostrar_projetos.addEventListener('click', () => {
    mostrar_projetos();

    esconder_botao();
});


function esconder_botao(){
    botao_mostrar_projetos.classList.add('remover');
}

function mostrar_projetos(){
    projetos_inativos.forEach(projeto_inativo => {
        projeto_inativo.classList.add('ativo');
    });
}