let hiden = document.querySelector('.hiden')
let colors = document.querySelector('#color')
let red = document.querySelector('#red')
let orange = document.querySelector('#orange')
let green = document.querySelector('#green')
let purple = document.querySelector ('#purple')


red.addEventListener('click', function(e){
    clickonit()
    colors.classList.toggle("red")
})
orange.addEventListener('click', function(e){
    clickonit()
    colors.classList.toggle("orange")
})
green.addEventListener('click', function(e){
    clickonit()
    colors.classList.toggle("green")
})
purple.addEventListener('click', function(e){
    clickonit()
    colors.classList.toggle("purple")
})

function clickonit(){
    console.log("Het werkt!")
    hiden.classList.toggle('hiden')
}


