// SELECIONANDO O ELEMENTO(INPUT) DE EXIBIÇÃO DOS VALORES
const display = document.getElementById("display")

// SELECIONANDO TODOS OS BOTÕES E ATRIBUINDO EM UM ARRAY 
const buttons = Array.from(document.getElementsByClassName("button"))

// ADICIONANDO EVENTO PARA TODOS OS BOTÕES
buttons.map(button => {
    button.addEventListener("click", (e) => {
        calculator(e)
    })
})

// FUNÇÃO PARA GERAR OS CALCULOS + VALIDAÇÕES
const calculator = (e) => {
    const targetText = e.target.innerText

        switch(targetText) {
            case "C":
                display.value = ""
                break
            case "Del":
                if(display.value) {
                    display.value = display.value.slice(0, -1)
                }
                break
            case "=":
                try {
                    if(display.value === "") {
                        display.value = "Faça uma operação!"
                    }
                    else {
                        display.value = eval(display.value)
                    }
                }
                catch {
                    display.value = "Operação inválida!"
                }
                break
            default:
                display.value += targetText
        }
}