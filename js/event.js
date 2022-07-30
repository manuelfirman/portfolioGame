document.addEventListener('DOMContentLoaded', function(){
    console.log("Inicia el juego");
    medidas.tomaMedida();
    medidas.drawTiles();
    keys.initKeys();
})

var start = document.getElementById("start");
start.addEventListener('click', function(){
    gameLoop.loop();
});

window.addEventListener('resize', function () {
    medidas.drawTiles();
})


var showkeys = document.getElementById("showkeys");
showkeys.addEventListener('click', function () {
  keys.showKeys();
});