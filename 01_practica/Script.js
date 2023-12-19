let lista = JSON.parse(localStorage.getItem("lista"));
if(lista === null){
  lista = []
} else {
  for(let i = 0; i <= lista.length; i++){
    console.log(lista[i])
    const elemento = document.createElement("p")
      elemento.innerHTML = lista[i]
    document.querySelector(".resultados").appendChild(elemento)

  }
}

function añadir(){
  const valor = document.querySelector("#input").value;
  lista.push(valor);
  console.log(valor + " añadido a la lista");
  const elemento = document.createElement("p")
  elemento.innerHTML = valor
  document.querySelector(".resultados").appendChild(elemento)
  document.querySelector("#input").value = ""
  localStorage.setItem("lista", JSON.stringify(lista))

}

function borrar(){
  console.log("Eliminar")
  lista = []
  document.querySelector(".resultados").innerHTML = ""
  localStorage.removeItem("lista")
}
function random(array){
return array[Math.floor(Math.random() * array.length)]

}

let sorteosMax = 5;

function sortear(){
 console.log("Sortear")
 const ganador = random(lista)
 const contenedor = document.querySelector("#contenedor")

 if(contenedor.children.length < sorteosMax){
    const elemento = document.createElement("p")
    elemento.innerHTML = ganador
    contenedor.appendChild(elemento)
 }
}

function capturarTecla(event){
  if(event.isComposing || event.keyCode === 13){
    añadir()
  }
}