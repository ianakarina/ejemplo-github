const container = document.querySelector('.container'); //Más rápido que getelementbyId

//Creo elemento html
const parrafo = document.createElement('p');
// Creo texto párrafo
const textParrafo = document.createTextNode('Mi párrafo');

//Añado texto al párrafo
parrafo.appendChild(textParrafo);

//renderizo en el Dom
container.append(parrafo);