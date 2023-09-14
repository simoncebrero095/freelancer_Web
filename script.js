const logo = document.querySelector(".logo")
const menuDesplegable = document.querySelector(".lista")

const desplegar = () =>{
    
    logo.classList.toggle(".logo")
    if(
        menuDesplegable.classList.add("lista"))
        
        menuDesplegable.classList.remove("lista")
    

}

logo.addEventListener("click", desplegar())