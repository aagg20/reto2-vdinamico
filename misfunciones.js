const urlApi = "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/";

function traerDatosHotel() {
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
function traerDatosMensajes() {
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
        url: urlApi +tipo+'/'+tipo+'/'+id,
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


