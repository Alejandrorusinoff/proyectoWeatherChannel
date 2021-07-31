let boton = document.querySelector("button")
let input = document.querySelector("input")


boton.addEventListener("click", function() {
    if (input.value !== "") {
        ciudad = input.value 
        cargaCiudad()     
    } else {
        alert("Debe ingresar una ciudad")
    }
})

window.addEventListener("keyup",function (e) {
    if (e.key === "Enter") {
        if (input.value !== "") {
            ciudad = input.value 
            cargaCiudad()     
        } else {
            alert("Debe ingresar una ciudad")
        }
    }
})

function cargaCiudad() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",function (dato) {
    document.querySelector(".container").style.visibility = "visible"
    document.querySelector("#ciudad").textContent = dato.name
    document.querySelector("#temperatura").innerHTML = dato.main.temp + "<sup>°C</sup>"
    document.querySelector("#wicon").src = "http://openweathermap.org/img/w/" + dato.weather[0].icon + ".png"
    document.querySelector("#descripcion").textContent = dato.weather[0].description
    input.value= ""
    })
    .fail(function() {
        alert("Ciudad no encontrada");
        input.value=""
    }) 
}
