const displayValue = document.getElementById("display")
const buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button => {
    button.addEventListener("click", (e) => {

        switch(e.target.innerText) {
            case "C":
                displayValue.innerText = ""
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
                displayValue.innerText += e.target.innerText
        }
    })
})