 // Aquí tu código
let button = document.getElementById("agregar");
let lista = document.getElementById("lista");

button.addEventListener("click",function(){
  console.log("click")
  let item = prompt("list")
  let li = document.createElement("li")
  let h2 = document.createElement("h2")
  h2.textContent = item
  li.appendChild(h2)
  lista.appendChild(li)
  
  console.log(item)
    
})
// aun me noto me noto mas verde que este comentario en CSS luego lo pongo bonito cuando este mas preparado IpromiseYou

