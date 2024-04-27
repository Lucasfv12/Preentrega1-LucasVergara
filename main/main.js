function solicitarPrestamo(){

    let nombre = prompt("Hola, si estás buscando un préstamo estás en el lugar correcto, a continuación escribí tu nombre");

let monto = parseInt(prompt("¡Bienvenido " + nombre + "!" + " indicá el monto del prestamo que quieres solicitar"))

alert("Usted ingresó " + monto)

let respuesta = prompt("Los prestamos tienen un interés del 70% y deben ser devueltos en 6 meses. ¿Está de acuerdo? Responda si o no.").toLowerCase()

if(respuesta == "si"){
    alert("Calcularemos el monto total del prestamo.")
    let montoTotal = monto*1.7
    alert("Usted deberá abonar un monto total de " + montoTotal)
    alert("A continuación le detallamos el monto por cada cuota")
for(let i=1; i<=6; i++)
    alert("Cuota N°" + i +" $"+ montoTotal/2)
    let respuestaPrestamo = prompt("Entonces ¿Quiere solicitar el préstamo? Responda si o no.").toLowerCase()
    if(respuestaPrestamo == "si"){
        alert("El prestamo ha sido otorgado. Gracias por elegirnos.")
    }else if(respuestaPrestamo == "no"){
        alert("No hay problema. Puede seguir pensando. Lo esperamos en otro momento")
    }
}else if(respuesta == "no"){
    alert("No hay problema. Lo/a esperamos en otro momento")
}
}

solicitarPrestamo()


