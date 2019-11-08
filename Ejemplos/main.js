var btn01 = document.querySelector('#btnEjemplo01')
var btn02 = document.querySelector('#btnEjemplo02')
var btn03 = document.querySelector('#btnEjemplo03')

btn01.addEventListener('click', () => {
	
  //Declarar el vector
  let v1 = [] 
  let v2 = new Array (9, 3 ,6 ,8 ,3)
  let v3 = Array (4)
  
  //Asignar valores del vector
  v1[0]= 'Alfredo Adame'
  v1[1]= 'Carlos Trejo'
  v1[2]= 'Luis Torres'
  
  v3[0]= 'Hola'
  v3[2]= 'Mundo!'
  
  //Imprimir en consola / alert
  window.alert(v1)
  window.alert (v2)
  window.alert (v3)  
  
  //Mostrar contenido del vector
  
  
 let tabla = document.querySelector('#tabla01')
 tabla.textContent=''
 
 for (let i=0; i<3; i++) {
	
  //window.alert(v1[i])
  
  let linea = tabla.insertRow(-1)
  let celda = linea.insertCell(0)
  let celda2 = linea.insertCell(1)
  
  celda.textContent= (i)
  celda2.textContent= (v1 [i])

}

})

btn02.addEventListener('click', () => {
	
  
	
	let v1 = new Array (5)
 
  for (let i=0; i<5; i++){
  
  v1[i]= prompt('Ingrese un numero: ')
	}
  
  let i=0
  let tabla = document.querySelector('#tabla02')
  while (i < 5) {
  
  let linea= tabla.insertRow(-1)
  let celda = linea.insertCell(0)
  let celda2 = linea.insertCell(1)
  
  celda.textContent=(i)
  celda2.textContent=(v1 [i])
  
  i++
}

})

btn03.addEventListener('click', () => {

var num3 = document.querySelector('#numero03')
let number = Number(num3.value)

let v1 = new Array (number.value)

for(let i =0; i < number; i++){
    v1[i]= prompt('Ingrese un numero: ')
}

let i=0
let tabla = document.querySelector('#tabla03')
while (i < number) {

    let linea = tabla.insertRow(-1)
    let celda = linea.insertCell(0)
    let celda2 = linea.insertCell(1)

    celda.textContent=(i)
    celda2.textContent=(v1 [i])


    i++
}

})