var gameLoop={
    id: null,
    fin: 0,
    aps: 0, 
    fps: 0,

    loop: function (tiempo) {
        gameLoop.id = window.requestAnimationFrame(gameLoop.loop);
        gameLoop.update();
        gameLoop.refresh();
        var diferencia = tiempo - gameLoop.fin;
        if(diferencia > 999){
            console.log(`
                fin=${gameLoop.fin}\n
                tiempo=${tiempo}\n
                diferencia=${diferencia}\n
                aps=${gameLoop.aps}\n
                fps=${gameLoop.fps}\n
                id=${gameLoop.id}\n
            `);
            gameLoop.fin = tiempo;
            gameLoop.fps = 0;
            gameLoop.aps = 0;
        }

    },
    
    update: function () {
        gameLoop.aps ++;
    },

    refresh: function(){
        gameLoop.fps++;
    }
}

function Area(x, y, ancho, alto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.id = "a" + x + "" + y;
    var div = `<div id=${this.id}></div>`;
    var contenedor = document.getElementById('game-container').innerHTML;
    document.getElementById('game-container').innerHTML = contenedor + div;
    document.getElementById(this.id).style.position = "absolute"; 
    document.getElementById(this.id).style.left = this.x + "px";
    document.getElementById(this.id).style.top = this.y + "px";
    document.getElementById(this.id).style.width = this.ancho + "px";
    document.getElementById(this.id).style.height = this.alto + "px";
    document.getElementById(this.id).style.backgroundColor = randomRGB();
}

function  randomRGB() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
}

var keys = {
    keyArray: new Array(),
    initKeys: function () {
        document.onkeydown = keys.getKey;
    },

    getKey: function (e) {
        keys.keyArray.push(e.key);
        console.log(e.key);
    },

    pressedKey: function(inKey){
        return (keys.keyArray.indexOf(inKey))? true : false;
    },

    deleteKeys: function () {
        keys.keyArray = new Array();
    },

    showKeys: function(){
        console.log(keys.keyArray);
    }
}