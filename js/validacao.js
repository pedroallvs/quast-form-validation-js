const botao = document.getElementById("botao")
const menssagemErro = document.querySelectorAll(".menssagem-erro")
const itensForm = document.querySelectorAll(".item-form")
const fomulario = document.getElementById("formulario")

function validacao(campo, posicao) {
    const valor = campo.value
    const obrigatorio = menssagemErro[posicao]
    if (valor === "") {
        campo.classList.add('borda-vermelha')
        obrigatorio.style.visibility = "visible"
    } else {
        obrigatorio.style.visibility = "hidden"
        campo.classList.remove('borda-vermelha')
        campo.classList.add('borda-verde')
    }
}
function submitForm(event) {
    event.preventDefault()

}
fomulario.addEventListener("submit", submitForm)
botao.addEventListener("click", function () {
    itensForm.forEach(function (item, posicao) {
        validacao(item, posicao)
    })
})

