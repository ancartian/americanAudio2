//controlar la visibilidad del contenedor del carrito

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

//uso de funcion flecha para evento del click
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})