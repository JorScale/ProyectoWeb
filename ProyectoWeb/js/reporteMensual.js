$(document).ready(function() {
    $('#reporte').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5',
            'pdfHtml5',
            'print'
        ]
        ,
        "language": {
            "sSearch": "Filtrar:",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 registros",
            "infoFiltered": "(Filtro de _MAX_ total registros)",
            "zeroRecords": "No se encontraron coincidencias",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Próximo",
                "previous": "Anterior"
            }
        }
    });
});


/*
 
     dom: 'Bfrtip',
    buttons: [{
        
            'excelHtml5',
            'pdfHtml5'
    }
    ]
*/