const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','green','blue','yellow','pink','purple','Salmon','MediumVioletRed','OrangeRed','Indigo','Lime','DarkCyan']

body.style.backgroundColor= 'violet'

button.addEventListener('click',chnageB)
function chnageB(){
    const colorIndex = parseInt(Math.random()*color.length)

    body.style.backgroundColor= color[colorIndex]
}

