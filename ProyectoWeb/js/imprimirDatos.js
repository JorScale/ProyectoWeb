

   window.onload=function() {

        // creamos los eventos para cada elemento con la clase "btn-primary"   el boton de imprimir
        let elementos=document.getElementsByClassName("btn-primary");
        for(let i=0;i<elementos.length;i++)
        {
            // cada vez que se haga clic sobre cualquier de los elementos,
            // ejecutamos la función obtenerValores()
            elementos[i].addEventListener("click",obtenerValores);

        }
        let elementosA=document.getElementsByClassName("btn-success");
        for(let i=0;i<elementosA.length;i++)
        {
            // cada vez que se haga clic sobre cualquier de los elementos,
            // ejecutamos la función obtenerValores()
            elementosA[i].addEventListener("click",AceptarSoli);

        }
        let elementosD=document.getElementsByClassName("btn-danger");
        for(let i=0;i<elementosD.length;i++)
        {
            // cada vez que se haga clic sobre cualquier de los elementos,
            // ejecutamos la función obtenerValores()
            elementosD[i].addEventListener("click",DenegarSoli);

        }
    }

    // funcion que se ejecuta cada vez que se hace clic
    function obtenerValores(e) {
    var encabezados=["N° Boleta","N° Cédula","Solicitante","Fecha Solicitud","Fecha Inicial","Fecha Final","Fecha Regreso"
                    ,"Días solicitados","Area","Días Disponibles","Estado"
                    ];
             var valores=[];
             var n =-1;

             $(this).parents("tr").find("td").each(function(){
                n+=1;
                if(n < $("#mydata tr:last td").length-1 ){
                    valores[n]=encabezados[n]+" :\t"+$(this).html()+"\n";
                }               
            });
            alert("\t Informacion de boleta de solicitud de vacaciones \n\n"+valores);
            
    }

    function AceptarSoli(e) {
        $(this).parents("tr").find("td").eq(10).html('Aceptada');
    }

    function DenegarSoli(e) {
       $(this).parents("tr").find("td").eq(10).html('Denegada'); 
    }

    




/*
var encabezados=["N° Boleta","N° Cédula","Solicitante","Fecha Solicitud","Fecha Inicial","Fecha Final","Fecha Regreso"
                             ,"Días solicitados","Area","Días Disponibles","Estado"
                             ];
             var valores=[];
             var n =-1;

    $(document).ready(function(){

        $(".btn-primary ").click(function(){
             
            // Obtenemos todos los valores contenidos en los <td> de la fila
            // seleccionada
            $(this).parents("tr").find("td").each(function(){
                n+=1;
                if(n < $("#mydata tr:last td").length-1 ){
                    valores[n]=encabezados[n]+" :\t"+$(this).html()+"\n";
                }               
            });
            alert("\t Informacion de boleta de solicitud de vacaciones \n\n"+valores);
            location.reload();
            
        });
    });

    */

   
