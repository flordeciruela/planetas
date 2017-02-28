
var datos = prompt("Ingresa tu peso:");
resultado(datos);
function resultado(datos){
  if(datos >= 0.0){
    return alert( "Tu peso en Mercurio es: "+pesoMercurio(datos)+"\n"+
           "Tu peso en Venus es: "+pesoVenus(datos)+"\n"+
           "Tu peso en Luna es: "+pesoLuna(datos)+"\n"+
           "Tu peso en Marte es: "+pesoMarte(datos)+"\n"+
           "Tu peso en Jupiter es: "+pesoJupiter(datos)
         );
  }
  else{
    return datos = prompt("Ingresa tu peso:");

  }
}
function int_zero(x)
{
	if ( x < 1 )
		return 0 ;
	else
		return parseInt( x ,10 );
}

function pesoMercurio(datos){
  return int_zero( 10 * datos * .378 ) / 10;
}

function pesoVenus(datos){
  return int_zero( 10 * datos * .906 ) / 10;
}

function pesoLuna(datos){
  return int_zero( 10 * datos * .166 ) / 10; //Luna

}

function pesoMarte(datos){
  return int_zero( 10 * datos * .379 ) / 10; //Marte
}

function pesoJupiter(datos){
  return int_zero( 10 * datos * 2.533 ) / 10;  //Jupiter
}
/*
function compute_datos(form)
{
    var datos = form.wt.value;
    if (datos > 0.0) {
        //Para Glisse
        form.outputmrc.value = int_zero( 10 * datos * .378 ) / 10;  //Mercurio
        form.outputvn.value = int_zero( 10 * datos * .906 ) / 10;  //Venus
        form.outputmoon.value = int_zero( 10 * datos * .166 ) / 10; //Luna
        form.outputmars.value = int_zero( 10 * datos * .379 ) / 10; //Marte
        form.outputjp.value = int_zero( 10 * datos * 2.533 ) / 10;  //Jupiter
        //Para Karin
        form.outputsat.value = int_zero( 10 * datos * 1.066 ) / 10; //Saturno
        form.outputur.value = int_zero( 10 * datos * .905 ) / 10;   //Urano
        form.outputnpt.value = int_zero( 10 * datos * 1.133 ) / 10; //Neptuno
        form.outputplt.value = int_zero( 10 * datos * .067 ) / 10; //Pluton

    }
*/
