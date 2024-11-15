'use strickt'

const grande = document.querySalector('.grande')
const punto = document.querySalectorAll('.grande')

punto.forEach( (cadaPunto , i)=> {
    punto[i].addEventListener('click',()=> {
        let posicion = i
        let operacion = posicion * -16.6
        
    grande.style.transform = `translateX(${operacion}%)`
})
})