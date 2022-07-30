var medidas = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    tilesSize: 100,
    tilesScale: 1, // 1 = 100%
    
    tomaMedida: function () {
        window.addEventListener('resize', function () {
            medidas.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            medidas.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log(`
            ancho = ${medidas.ancho}\n
            alto = ${medidas.alto}\n
            `)
    
        });
    },

    getTilesWidth: function () { // devuelve ancho
        var nuevaMedidaTiles = medidas.tilesSize * this.tilesScale;
        return Math.ceil((medidas.ancho - nuevaMedidaTiles)/nuevaMedidaTiles);
    },

    getTilesHeigth: function () { // devuelve alto
        var nuevaMedidaTiles = medidas.tilesSize * this.tilesScale;
        return Math.ceil((medidas.alto - nuevaMedidaTiles)/nuevaMedidaTiles);
    },

    getTotalTiles: function () {
        return medidas.getTilesWidth() * medidas.getTilesHeigth();
    },

    drawTiles: function () {
        var nuevaMedidaTiles = medidas.tilesSize * this.tilesScale;
        for (var y = 0; y < medidas.getTilesHeigth(); y++) {
            for (var x = 0; x < medidas.getTilesHeigth(); x++) {
                Area(x * nuevaMedidaTiles, y * nuevaMedidaTiles, nuevaMedidaTiles, nuevaMedidaTiles);
            }
        }
    }   


}