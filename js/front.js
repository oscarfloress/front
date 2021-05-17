
$(document).ready(function () {

    $('select').on('change', function (e) {
        var elements = $('div.fabricante');

        elements.each(function (index, domElement) {
            var $element = $(domElement);

            var valueSelected = $('select').find('option:selected').val();

            var cadena = $element.text();
            if (cadena.includes(valueSelected)) 
                $element.parent().parent().show();
                
            else $element.parent().parent().hide();
        });
    });

    $("#buscarBoton").click(function () {
        
        var elements = $('p.nombreProducto');

        elements.each(function (index, domElement) {
            var $element = $(domElement);

            var buscarProducto = $("#buscarProducto").val();

            var cadena = $element.text().toUpperCase();
            if (cadena.includes(buscarProducto.toUpperCase()))
                $element.parent().parent().show();
            else $element.parent().parent().hide();
        });
    });

});
