$(document).ready(function() {
    $('#reporte').DataTable({
        dom: 'Bfrtip',
        buttons: [{
                extend: 'excelHtml5',
                text: '<i class="far fa-file-excel" id="excel-icon"></i>',
                titleAttr: 'Excel'
            },

            {
                extend: 'pdfHtml5',
                text: '<i class="far fa-file-pdf" id="pdf-icon"></i>',
                titleAttr: 'PDF'
            },
            {
                extend: 'print',
                text: ' <i class="fa fa-print" aria-hidden="true"></i>',
                titleAttr: 'Imprimir'
            }
        ],
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