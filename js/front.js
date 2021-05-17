
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

});

function buscarProducto() {
    var buscarProducto = document.getElementById("buscarProducto");
    alert("Valor de la busqueda es: " + buscarProducto.value);
}


