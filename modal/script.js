const buttonSub = document.querySelector('[type="submit"]');
const buttonLogin = document.querySelector(".login");
const fechar = document.querySelector(".fechar");

const submeter = document.querySelector('button[type="submit"]');

const modalContainer = document.querySelector(".modal-container");

function abrirModal() {
  modalContainer.classList.toggle("ativo");
}

function fecharModal(ev) {  
  if (ev.target === this)
  modalContainer.classList.toggle("ativo");
}

function previnir(ev) {
  ev.preventDefault();
}

buttonLogin.addEventListener("click", abrirModal);
fechar.addEventListener("click", fecharModal);
submeter.addEventListener("click", previnir);
modalContainer.addEventListener('click', fecharModal)
