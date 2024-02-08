//creamos la variable al html
const miFoto = document.createElement('img');

//ahora tenemos que poner una foto en el elemnto img
miFoto.src = '../imagenes/lekumberri-navarra.jpg';

//ahora lo agregamos al html
document.body.appendChild(miFoto);

//agregamos la animacion
miFoto.addEventListener('mouseover', () =>{
    miFoto.src = '../imagenes/ujue-navarra.jpg';
});

miFoto.addEventListener('mouseout', () =>{
    miFoto.src = '../imagenes/lekumberri-navarra.jpg';
});




//ahora el punto 2
const miButon = document.createElement('button');

 
//ahora le metemos al boton texto?
miButon.textContent = 'Usted va a cambiar la foto';

//estilo porque soy guay
miButon.style.marginLeft = '1rem';

//lo agregamos al html
document.body.appendChild(miButon);


const colores = ['red', 'blue', 'green', 'yellow'];

//se supone que debemos iterar
let indiceColor = 0;//lo ponemos en 0 porque asi empieza a contar 1 seria color rojo,


// Función para manejar el clic en el botón
function manejarClic() {

    //priemro la alerta
    alert('Cambiando de color')
    // Obtener el próximo color en la lista de colores
    const proximoColor = colores[indiceColor];

    // Actualizar el color del texto del botón
    miButon.style.color = proximoColor; 

    // Incrementar el índice del color para apuntar al siguiente color en la lista
    indiceColor++;

    // Si hemos llegado al final de la lista, volver al primer color
    if (indiceColor >= colores.length) {
        indiceColor = 0;
    }
}

//agregamos el vento al hacer click
miButon.addEventListener('click', manejarClic);



