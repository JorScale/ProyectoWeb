$(document).ready(function(){
$('#tablaUsuarios').DataTable({
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
 //Script para borrar fila
       $(function () {
    $(document).on('click', '.borrar', function (event) {
      var mensaje;
    var usu = $(this).parents("tr").find("td").eq(2).text();
    var opcion = confirm("Desea eliminar al usuario "+usu+"?");    
        event.preventDefault();
    if (opcion == true) {
        $(this).closest('tr').remove();
        mensaje = usu+" eliminado de la lista de Usuarios";
      }else{
        mensaje = "Eliminacion de usuario "+usu+" cancelada";
      }
      alert(mensaje);
    });
});

//Script para  degradar
$(document).ready(function(){
$(".btnDegradar").click(function(){
$(this).parents("tr").find("td").eq(5).html('Usuario');
 });
});

//Script para Ascender
$(document).ready(function(){
$(".btnAscender").click(function(){
$(this).parents("tr").find("td").eq(5).html('Administrador');
 });
});

//Script para habilitar botn de eliminar todos
      var control = 0;
$(":checkbox").click(function(){
    if (this.checked) control++;
    else control--;
    if (control > 0) $("#btnElimTodos").prop("disabled", false);
    else $("#btnElimTodos").prop("disabled", true);
});

//Script para eliminar seleccionados
function borrarSele() {
  tab = document.getElementById('tabla');
  for (i=tab.getElementsByTagName('input').length-1; i>=0; i--) {
    chk = tab.getElementsByTagName('input')[i];
    if (chk.checked)
      tab.removeChild(chk.parentNode.parentNode);
  event.preventDefault();
        $(this).closest('tr').remove();
  }
}