function clic(){
    var mascota = document.getElementById("mascota").value;
    if (mascota = "") {
        alert("Debes ingresar un nombre de mascota");
    }else{
        alert(`Buen nobre: ${mascota}`);
    }
}