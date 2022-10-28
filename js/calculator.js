const displayValue = document.getElementById("display")
const buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button => {
    button.addEventListener("click", (e) => {
        const targetText = e.target.innerText

        switch(targetText) {
            case "C":
                if(displayValue.innerText) {
                    displayValue.innerText = ""
                }
                break
            case "Del":
                displayValue.innerText = displayValue.innerText.slice(0, -1)
                break
            case "=":
                try {
                    displayValue.innerText = eval(displayValue.innerText)
                }
                catch {
                    displayValue.innerText = "Error!"
                }
                break
            default:
                displayValue.innerText += targetText
        }
    })
})