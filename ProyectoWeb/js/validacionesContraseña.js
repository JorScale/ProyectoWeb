var aleatorio = Math.round(Math.random()*999999);

function validar(){

	var cod = document.getElementById('txtCodigo').value;
	if (cod.length==0) {

	}else{
		if (cod=='12345') {
		document.getElementById('msj').innerText="";
		document.getElementById('btnActializa').disabled=false;
		document.getElementById('txtPass_1').disabled=false;
		document.getElementById('txtPass_2').disabled=false;
		document.getElementById("txtCodigo").disabled = true;
		document.getElementById('btnche').disabled=true;
		document.getElementById('btn_1').disabled=false;
		document.getElementById('btn_2').disabled=false;
		changeColor('#28a745');
		return false;

	}else{
		document.getElementById('msj').innerText="Codigo Invalido";
		document.getElementById('txtPass_1').disabled=true;
		document.getElementById('txtPass_2').disabled=true;
		document.getElementById('btnActializa').disabled=true;
		document.getElementById('btn_1').disabled=true;
		document.getElementById('btn_2').disabled=true;
		changeColor('#EDBB99');
		return false;
	}
	}
}

function changeColor(color){ 
document.formulario.txtCodigo.style.backgroundColor=color;
} 
function change(color){ 
document.formulario.txtPass_1.style.background=color;
document.formulario.txtPass_2.style.background=color; 
} 

function orden(){
var clave_1 = document.getElementById('txtPass_1').value;	
var clave_2 = document.getElementById('txtPass_2').value;
	
var espacios = false;
var cont = 0;
 
while (!espacios && (cont < clave_1.length || cont < clave_2.length)) {
  if (clave_1.charAt(cont) == " " || clave_2.charAt(cont) == " ")
    espacios = true;
  cont++;
}
 
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}	
	
	if (clave_1==clave_2) {
		change('#28a745');
	 return true;

}else{
	change('#EDBB99');
alert("Las contraseñas no son iguales, por favor verifique que sean iguales o diferentes a la anterior.");
	return false;
}
}

function ver(n){
	if (document.getElementById('txtPass_'+n).type=='password') {
		document.getElementById('txtPass_'+n).type='text';
		document.getElementById("S_"+n).title="Ocultar Contraseña";
		document.getElementById('img_'+n).src='../Iconos/v2.png'
	}else{
		document.getElementById('txtPass_'+n).type='password';
		document.getElementById("S_"+n).title="Mostrar Contraseña";
		document.getElementById('img_'+n).src='../Iconos/v1.png'
	}
}

function codigo(){
	

//alert("Tu código para jugar es: "+aleatorio);
//alert("Sabrás si tu cupón ha sido premiado en unos segundos");
//num=aleatorio;
alert(aleatorio);
return aleatorio;
}





//validaciones de usuario

function usuario(){

var texto= document.getElementById('txtUsuario').value;
	if(texto ==""){
		document.getElementById('mensaje').innerText="Campo Obligatorio";
		document.getElementById('btnBusca').href="#";
	}else{
		document.getElementById('mensaje').innerText="";
		document.getElementById('btnBusca').href='../Cambio-Contraseña/index.html';
	}

}
