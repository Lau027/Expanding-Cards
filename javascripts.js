const imagenes = document.querySelectorAll('.container__imagenes-imagen')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        removeActiveClasses()
        imagen.classList.add('active')
    })
})

function removeActiveClasses() {
    imagenes.forEach(imagen => {
        imagen.classList.remove('active');
        
    })
}