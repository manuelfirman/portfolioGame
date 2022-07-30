var ajax={
    carga: function (ruta) {
        fetch(ruta)
        .then(function (respuesta) {
            return respuesta.text();
        }) .then(function (data) {
            console.log(JSON.parse(data));
        }).catch(function (err) {
            console.error(err);
        })
        // ruta == json (mapa del juego)
        // JSON.parse -> convierte el texto en JSON
    }
}

ajax.carga(/*Ruta del archivo JSON, "img/juego/asd.json" */)