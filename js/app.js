var parrafo = document.body.firstElementChild.firstChild;
console.log(parrafo);
//var imagen = document.body.children[1];
//console.log(imagen)

var text = document.body.firstChild
console.log(text);

//muestra solo un elemento
 var parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1);

//muestra un coleccion html (array)--se va al elemento específico
var imagen = document.getElementsByTagName('img')[0];
console.log(imagen);

//muestra solo un elemento
var img = document.querySelector('img');
console.log(img);
//muestra una lista de elementos
var li = document.querySelectorAll('li')[1];
console.log(li);
