const btnAbrirModalCreate = document.getElementById('btnAbrirModalCreate');
btnAbrirModalCreate.addEventListener('click', abrirModalCreate);

// MODAL CREATE
const modalCreate = document.getElementById('modal-create'); 
const btnAdicionar = document.getElementById('btnAdicionar');
const btnCancelar = document.querySelector('.btn-cancelar');
btnCancelar.addEventListener('click', fecharModal);


function abrirModalCreate(){
    modalCreate.style.display = 'block';
}

function fecharModal(){
    modalCreate.style.display = 'none';
}

