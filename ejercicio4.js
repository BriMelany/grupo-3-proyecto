let totalcompra=parseInt(prompt("Ingrese el total de su compra"));
let codigodesc= prompt("Ingrese si tiene algun codigo de Descuento");
let descuento;
let totalpagar;

if (codigodesc==="DESCUENTO10"){
descuento="10%";
totalpagar=totalcompra-(0.1*totalcompra);
}else if(codigodesc==="DESCUENTO20"){
descuento="20%";
totalpagar=totalcompra-(0.2*totalcompra);
}else{
    descuento=null;
    totalpagar=totalcompra;
}

if(descuento !=null){
    console.log("Felicidades!! Obtuviste un descuento del "+descuento);
    console.log("Nuevo monto a pagar: "+totalpagar);
}else{
    console.log("Codigo de descuento invalido):");
    console.log("Monto a pagar: "+totalpagar)
}



