function cambiar(n){

if(document.getElementById('pass_'+n).type=="password"){
document.getElementById("pass_"+n).type="text";
document.getElementById("txt_"+n).innerText=" Ocultar Contraseña";
}else{
	if (document.getElementById('pass_'+n).type=="text") {
		document.getElementById("pass_"+n).type="password";
		document.getElementById("txt_"+n).innerText=" Mostrar Contraseña";
		
	}
}	
	}

function valida(){
var clave1 = document.getElementById('pass_1').value;
var clave2 = document.getElementById('pass_2').value;
var clave3 = document.getElementById('pass_3').value;
	if (clave1.length==0 && clave2.length==0) {
		document.getElementById("msj2").innerText=" ";
	}else{
		if (clave1==clave2) {
	document.getElementById("msj2").innerText="Contraseña ya usada, ingrese una nueva";
	}else{
			if(clave1!=clave2){
				document.getElementById("msj2").innerText=" ";
			}	
	}
	}
}


function verifica(){
var clave_1 = document.getElementById('pass_1').value;	
var clave_2 = document.getElementById('pass_2').value;
var clave_3 = document.getElementById('pass_3').value;
	if (clave_2==clave_3 && clave_3!=clave_1) {
	 return true;
}else{
alert("Las contraseñas no son iguales, por favor verifique que sean iguales o diferentes a la anterior.");
		  return false;
	

}
}
					
function defecto(){
	document.getElementById('pass_1').value="";
	document.getElementById('pass_2').value="";
	document.getElementById('pass_3').value="";
}
