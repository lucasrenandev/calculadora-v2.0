const display = document.getElementById("display")
const buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button => {
    button.addEventListener("click", (e) => {
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
                    display.value = eval(display.value)
                }
                catch {
                    display.value = "Error!"
                }
                break
            default:
                display.value += targetText
        }
    })
})