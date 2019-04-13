$(document).ready(function(){
$('#mydata').DataTable({
   dom: 'Bfrtip',
    buttons: [
            'excelHtml5',
            'pdfHtml5'
    ]   ,
    "language":{
        "sSearch": "Filtrar:",
          "lengthMenu": "Mostrar _MENU_ registros",
          "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
          "infoFiltered":   "(Filtro de _MAX_ total registros)",
          "paginate": {
        "first":      "Primero",
        "last":       "Ultimo",
        "next":       "Próximo",
        "previous":   "Anterior"
    }
    }
   });
});
