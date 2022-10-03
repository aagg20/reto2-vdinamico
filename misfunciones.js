const urlApi = "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/";

function traerDatosHabitacion() {
    $.ajax({
        url: urlApi + "room/room",
        type: 'GET',
        dataType: "json",
        success: function (respuesta) {
            pintarDatosGral(respuesta.items, "name", "room");
        },
        error: function (respuesta, xhr) {
            alert("Error de peticion");
        }
    });
}

function traerDatosCliente() {
    $.ajax({
        url: urlApi + "client/client",
        type: 'GET',
        dataType: "json",
        success: function (respuesta) {
            pintarDatosGral(respuesta.items, "name", "client");
        },
        error: function (respuesta, xhr) {
            alert("Error de peticion");
        }
    })

}
function traerDatosMensaje() {
    $.ajax({
        url: urlApi + "message/message",
        type: 'GET',
        dataType: "json",
        success: function (respuesta) {
            pintarDatosGral(respuesta.items, "messageText", "message");
        },
        error: function (respuesta, xhr) {
            alert("Error de peticion");
        }
    });

}

function guardarIdyTipo(id, tipo) {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('tipo', tipo);
    location.href = 'detalles.html';
}

function mostrarDetalles() {
    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');

    $.ajax({
        url: urlApi + tipo + '/' + tipo + '/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            pintarDatosDetalles(respuesta.items);
        },
        error: function (respuesta, xhr) {
            alert("Peticion Erronea");
        }
    })
}

function pintarDatosGral(datos, clnMostrar, tipo) {
    let tipoTabla = tipo;
    let htmlParaInsertar = "";
    htmlParaInsertar += "<tr>";
    htmlParaInsertar += "<th>Titulo</th>";
    htmlParaInsertar += "</tr>";

    for (let index = 0; index < datos.length; index++) {
        htmlParaInsertar += "<tr>";
        htmlParaInsertar += "<td><a href='detalles.html' onclick='guardarIdyTipo(" + datos[index].id + ", \"" + tipoTabla + "\");'>" + datos[index][clnMostrar] + "</a></td>";
        htmlParaInsertar += "</td>"
    }
    //document.getElementById("#tabla").innerHTML = texto;

    $("#resultado").empty();
    $("#resultado").append(htmlParaInsertar);
}

function pintarDatosDetalles(datos) {
    let htmlParaInsertar = "";
    htmlParaInsertar += "<tr>";
    Object.keys(datos[0]).forEach(elemento => htmlParaInsertar += "<th>" + elemento + "</th>");
    htmlParaInsertar += "</tr>";

    for (let index = 0; index < datos.length; index++) {
        htmlParaInsertar += "<tr>"
        Object.values(datos[index]).forEach(elemento => htmlParaInsertar += "<td>" + elemento + "</td>");
        htmlParaInsertar += "</tr>"
    }

    $("#resultado").empty();
    $("#resultado").append(htmlParaInsertar);
}

function guardarHabitacion() {
    let datosAEnviar = {
        "id": $("#idRoom").val(),
        "room": $("#nameRoom").val(),
        "stars": $("#stars").val(),
        "category_id": $("#category_id").val(),
        "description": $("#description").val()
    };
    $.ajax({
        url: urlApi + "room/room",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datosAEnviar),
        success: function (respuesta) {
            alert("La habitacion ha sido agregada con exito!");
            traerDatosHabitacion();
        },
        error: function (respuesta, xhr) {
            alert("Peticion erronea");
        }
    });
}

function guardarCliente() {
    let datosAEnviar = {
        "id": $("#idCliente").val(),
        "room": $("#nameCliente").val(),
        "email": $("#emailCliente").val(),
        "age": $("#ageCliente").val()
    };
    $.ajax({
        url: urlApi + "cliente/cliente",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datosAEnviar),
        success: function (respuesta) {
            alert("El cliente ha sido agregada con exito!");
            traerDatosCliente();
        },
        error: function (respuesta, xhr) {
            alert("Peticion erronea");
        }
    });
}

function guardarMensaje() {
    let datosAEnviar = {
        "id": $("#idMensaje").val(),
        "room": $("#messageText").val()
    };
    $.ajax({
        url: urlApi + "room/room",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datosAEnviar),
        success: function (respuesta) {
            alert("El mensaje ha sido agregado con exito!");
            traerDatosMensaje();
        },
        error: function (respuesta, xhr) {
            alert("Peticion erronea");
        }
    });
}

function actualizarHabitacion() {
    let datosAEnviar = {
        "id": $("#idRoom").val(),
        "room": $("#nameRoom").val(),
        "stars": $("#stars").val(),
        "category_id": $("#category_id").val(),
        "description": $("#description").val(),
    };
    $.ajax({
        url: urlApi + "room/room",
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datosAEnviar),
        success: function (respuesta) {
            alert("La habitacion ha sido actualizada con exito!");
            traerDatosHabitaciones();
        },
        error: function (respuesta, xhr) {
            alert("Peticion erronea");
        }
    });
}

function actualizarCliente() {
    let datosAEnviar = {
        "id": $("#idCliente").val(),
        "room": $("#nameCliente").val(),
        "email": $("#emailCliente").val(),
        "age": $("#ageCliente").val()
    };
    $.ajax({
        url: urlApi + "cliente/cliente",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datosAEnviar),
        success: function (respuesta) {
            alert("El cliente ha sido actualizado con exito!");
            traerDatosCliente();
        },
        error: function (respuesta, xhr) {
            alert("Peticion erronea");
        }
    });
}

function actualizarMensaje() {
    let datosAEnviar = {
        "id": $("#idMensaje").val(),
        "room": $("#messageText").val()
    };
    $.ajax({
        url: urlApi + "room/room",
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(datosAEnviar),
        success: function (respuesta) {
            alert("El mensaje ha sido actualizado con exito!");
            traerDatosMensaje();
        },
        error: function (respuesta, xhr) {
            alert("Peticion erronea");
        }
    });
}

function borrarHabitacion() {
    let idABorrar = {
        "id": $("#idRoom").val()
    };
    $.ajax({
        url: urlApi + "room/room",
        type: "DELETE",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(idABorrar),
        success: function (respuesta) {
            alert("La Habitacion ha sido borrada");
            traerDatosHabitacion();
        },
        error: function (respuesta, xhr) {
            alert("Peticion incorrecta");
        }

    });
}

function borrarCliente() {
    let idABorrar = {
        "id": $("#idCliente").val()
    };
    $.ajax({
        url: urlApi + "cliente/cliente",
        type: "DELETE",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(idABorrar),
        success: function (respuesta) {
            alert("El cliente ha sido borrado");
            traerDatosCliente();
        },
        error: function (respuesta, xhr) {
            alert("Peticion incorrecta");
        }

    });
}

function borrarMensaje() {
    let idABorrar = {
        "id": $("#idMensaje").val()
    };
    $.ajax({
        url: urlApi + "mensaje/mensaje",
        type: "DELETE",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(idABorrar),
        success: function (respuesta) {
            alert("LEl mensaje ha sido borrado");
            traerDatosMensaje();
        },
        error: function (respuesta, xhr) {
            alert("Peticion incorrecta");
        }
    });
}