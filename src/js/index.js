

const botao_mostrar_projetos = document.querySelector('.btn-mostrar-projetos');
const projetos_inativos = document.querySelectorAll('.projeto:not(.ativo)');
const botao_ocultar_projetos = document.querySelector('.btn-ocultar-projetos');

botao_mostrar_projetos.addEventListener('click', () => {
    mostrar_projetos();

    esconder_botao();
});


botao_ocultar_projetos.addEventListener('click', () =>{
    projetos_inativos.forEach(projeto_inativo => {
        projeto_inativo.classList.remove('ativo');
    });


    botao_ocultar_projetos.classList.remove('adicionar');
    botao_mostrar_projetos.classList.remove('remover');

})


function esconder_botao(){
    botao_mostrar_projetos.classList.add('remover');
}

function mostrar_projetos(){
    projetos_inativos.forEach(projeto_inativo => {
        projeto_inativo.classList.add('ativo');
        botao_ocultar_projetos.classList.add('adicionar');
    });
}