const formInput = document.querySelector('.form-input input')
const clearButton = document.querySelector('.clearButton')
const equalButton = document.querySelector('.equalButton')
const buttons = document.querySelectorAll('button')

clearButton.addEventListener('click', () => {
    console.log("form deleted!")
    formInput.value = ""
})

equalButton.addEventListener('click', () => {
    console.log("equal button pressed!")
    formInput.value = eval(formInput.value)
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].value != "C" && buttons[i].value != "=") {
            formInput.value = formInput.value + buttons[i].value
            console.log(formInput.value)
        }
    })
}