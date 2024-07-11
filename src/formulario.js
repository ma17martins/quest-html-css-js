const dados = document.querySelectorAll(".dados");
const enviarForm = document.getElementById("formulario");
const erro = document.querySelectorAll(".msg-erro")


enviarForm.addEventListener("submit", function (event) {
    event.preventDefault();

    dados.forEach(informacoes => {
        const aviso = informacoes.nextElementSibling;

        if (informacoes.value === "") {
            informacoes.classList.add("nao-preenchido");
            aviso.classList.remove("msg-erro");

        } else {
            informacoes.classList.add("preenchido");
            informacoes.classList.remove("nao-preenchido");
            aviso.classList.add("msg-erro");
        }
    })
});