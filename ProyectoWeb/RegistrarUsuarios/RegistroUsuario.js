function validateForm(e){
    var elements = e.elements;
    var num=0;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].tagName === "INPUT" || elements[i].tagName === "SELECT"){
            if(elements[i].value.trim() === "" && elements[i].required === true) {
                elements[i].style.backgroundColor = "#FFD1D1";
                num++;
            }else{
                  elements[i].style.backgroundColor = "#B7FEB7";
            }
        }
    }
    if (num==0) {
        e.submit();
    }

}
function ocultar(variable){
    
    document.getElementById("tabla"+variable).style.display="none";
    
}
