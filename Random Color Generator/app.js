const changeBodyColor = document.body
const btn = document.querySelector('.btn')
const currentColor = document.querySelector('.current_color')
/*
function randomColorGenerator(){
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let randomColor = `rgb(${red},${green},${blue})`
    console.log('randomColor:', randomColor)
    return randomColor
}
// randomColorGenerator()

btn.addEventListener('click', () => {
    let randomColor = randomColorGenerator()
    changeBodyColor.style.background = randomColor
    currentColor.textContent = randomColor
})

*/


function randomGradientGenerator(){
    let gradient = `linear-gradient(to left,`
    let numStops = Math.floor(Math.random()*4)+2 // Generate between 2-5 color stops
    for (let i = 0; i < numStops; i++){
        let red = Math.floor(Math.random()*256)
        let green = Math.floor(Math.random()*256)
        let blue = Math.floor(Math.random()*256)
        let stopPercentage = Math.floor((i+1)*100/(numStops+1))
        gradient += `rgb(${red},${green},${blue}) ${stopPercentage}%,`
    }
    gradient = gradient.slice(0, -1) + ')' // Remove trailing comma and add closing parenthesis
    console.log('gradient:', gradient)
    return gradient
    console.log(gradient)
}


btn.addEventListener('click', () => {
    let randomGradient = randomGradientGenerator()
    changeBodyColor.style.background = randomGradient
    // currentColor.textContent = randomGradient
})
