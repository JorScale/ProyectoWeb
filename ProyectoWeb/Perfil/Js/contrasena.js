function cambiar(n){
if(document.getElementById('pass_'+n).type=="password"){
document.getElementById("pass_"+n).type="text";
document.getElementById("S_"+n).title="Ocultar Contraseña";
document.getElementById('img_'+n).src='../Imagenes/v2.png';
}else{
	if (document.getElementById('pass_'+n).type=="text") {
		document.getElementById("pass_"+n).type="password";
		document.getElementById("S_"+n).title="Mostrar Contraseña";
		document.getElementById('img_'+n).src='../Imagenes/v1.png';
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
var espacios = false;
var cont = 0;
 
while (!espacios && (cont < clave_1.length || cont < clave_2.length || cont < clave_3.length)) {
  if (clave_1.charAt(cont) == " " || clave_2.charAt(cont) == " " || clave_3.charAt(cont) == " ")
    espacios = true;
  cont++;
}
 
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}
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
	document.getElementById('img_1').src='../Imagenes/v1.png';
	document.getElementById('img_2').src='../Imagenes/v1.png';
	document.getElementById('img_3').src='../Imagenes/v1.png';
	document.getElementById("pass_1").type="password";
	document.getElementById("pass_2").type="password";
	document.getElementById("pass_3").type="password";
	document.getElementById("S_1").title="Mostrar Contraseña";
	document.getElementById("S_2").title="Mostrar Contraseña";
	document.getElementById("S_3").title="Mostrar Contraseña";

}
