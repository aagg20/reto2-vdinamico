const urlApi ="https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/";

function traerDatosHotel() {
    $.ajax({
        url: urlApi + "room/room",
        type: 'GET',
        dataType: "json",
        success: function(respuesta) {
            pintarDatosGral(respuesta.items, "room");
        },
        error: function(respuesta, xhr){
            alert("Error de peticion");
        }
    })

}

function traerDatosCliente() {
    $.ajax({
        url: urlApi + "client/client",
        type: 'GET',
        dataType: "json",
        success: function(respuesta) {
            pintarDatosGral(respuesta.items);
        },
        error: function(respuesta, xhr){
            alert("Error de peticion");
        }
    })

}
function traerDatosMensajes() {
    $.ajax({
        url: urlApi + "message/message",
        type: 'GET',
        dataType: "json",
        success: function(respuesta) {
            pintarDatosGral(respuesta.items);
        },
        error: function(respuesta, xhr){
            alert("Error de peticion");
        }
    });

}

function mostrarDetalles(){
let id = sessionStorage.getItem('id');
let tipo = sessionStorage.getItem('tipo');
$.ajax({
    url:
    type: 'GET',
    dataType: 'json',
    success: function(respuesta){

    }
})

}

function pintarDatosGral(datos, clnMostrar){
    let htmlParaInsertar = "";
    htmlParaInsertar += "<tr>";
    htmlParaInsertar+="<th>Titulo</th>";
    htmlParaInsertar +="</tr>";

    for (let index = 0; index < datos.length; index++) {
        htmlParaInsertar+="<tr>";
        htmlParaInsertar+="<td><a href='#' onclick='guardarIdyTipo('"+datos[i].id+", \""+[clnMostrar]="</td>";
        htmlParaInsertar +="</td>"
}

function guardarIdyTipo(id,tipo){

}

function pintarDatosDetalles(){
    let htmlParaInsertar = "";
    htmlParaInsertar += "<tr>";
    Object.keys(datos[i]).forEach(a +> htmlParaInsertar+="<th>"+a+"</th>");
    htmlParaInsertar +="</tr>";

    for (let index = 0; index < datos.length; index++) {
        Object.values(datos[i]).forEach(a => htmlParaInsertar+="<td>"+a+"</td>");
        htmlParaInsertar +="</td>"
        
    }


    $("#resultado").empty();
    $("#resultado").append(htmlParaInsertar);


}