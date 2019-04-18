$(document).ready(function() {
    $('#mydata').DataTable({
        
        "language": {
            "sSearch": "Filtrar:",
            "lengthMenu": "Mostrar _MENU_ registros",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoFiltered": "(Filtro de _MAX_ total registros)",
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
        buttons: [

            'excelHtml5',
            'pdfHtml5'
        ]
        ,
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        order: [
            [1, 'asc']
        ],
*/