let importe=parseInt(prompt("Ingrese el importe de la compra"));
let iva=prompt("Ingrese el tipo de IVA ");
let total;


switch(iva){
    case "basico" : porcentajeIva=0.10; break;
    case "reducido": porcentajeIva=0.05;break;
    case "superreducido" :porcentajeIva=0.02; break;
    default :  porcentajeIva=null; break;
}

if(porcentajeIva !=null){
  total=importe + importe*porcentajeIva;
}else{
    console.log("Tipo de IVA incorrecto")
}

console.log("El total es : " + total)