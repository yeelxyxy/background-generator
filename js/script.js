// Here's a test channel number, check the console!
console.log(getRandomColorChannel())

// 1) Built a colour string using `getRandomColorChannel()` for each of the three colour channels (R, G, B)

// 2) Update user interface (`document`), setting the new colour to the body's background

// 3) Use the new RGB value to update the label "rgb(###, ####, ###)" (replacing ###s with the Number values)

// 4) Wrap the random colour procedure in a function named `setNewColour()`, call it from the `console` to test

let theBody = document.querySelector('body')
let theMsg = document.querySelector('#rgbVal')



function bgChanger(){
let rCol = getRandomColorChannel()
let gCol = getRandomColorChannel()
let bCol = getRandomColorChannel()

theBody.style.setProperty(`background-color`, `rgb(${rCol},${gCol},${bCol})`)
theMsg.textContent = `rgb(${rCol},${gCol},${bCol})`
}

