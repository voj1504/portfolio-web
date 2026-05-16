// 1. Captura os elementos do DOM pelo ID
const form = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const msgErro = document.getElementById("mensagem-erro");
const msgSucesso = document.getElementById("mensagem-sucesso");

// 2. "Escuta" o evento de envio do formulário
form.addEventListener("submit", function(evento) {

    // 3. Impede o comportamento padrão (recarregar a página)
    evento.preventDefault();

    // 4. Lê os valores digitados, removendo espaços extras
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

    // 5. Valida o formato do e-mail com uma expressão regular
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // 6. Verifica se algum campo está vazio ou o e-mail é inválido
    if (nome === "" || email === "" || mensagem === "" || !emailValido) {
        msgErro.style.display = "block";
        msgSucesso.style.display = "none";
        return;
    }

    // 7. Se passou na validação: limpa os campos e exibe sucesso
    msgErro.style.display = "none";
    msgSucesso.style.display = "block";
    campoNome.value = "";
    campoEmail.value = "";
    campoMensagem.value = "";
});

// 8. Toggle claro/escuro
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
});
