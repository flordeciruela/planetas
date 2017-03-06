
var datos = prompt("Ingresa tu peso:");
resultado(datos);
function resultado(datos){
  if(datos >= 0.0){
    return alert( "Tu peso en Mercurio es: "+pesoMercurio(datos)+"\n"+
           "Tu peso en Venus es: "+pesoVenus(datos)+"\n"+
           "Tu peso en Luna es: "+pesoLuna(datos)+"\n"+
           "Tu peso en Marte es: "+pesoMarte(datos)+"\n"+
           "Tu peso en Jupiter es: "+pesoJupiter(datos)+"\n"+
           "Tu peso en Saturno es: "+pesoSaturno(datos)+"\n"+
           "Tu peso en Urano es : "+pesoUrano(datos)+"\n"+
           "Tu peso en Neptuno es : "+pesoNeptuno(datos)+"\n"+
           "Tu peso en Pluton es : "+pesoPluton(datos)
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

function pesoSaturno(datos){
  return int_zero( 10 * datos * 1.066 ) / 10;
}

function pesoUrano(datos){
  return int_zero( 10 * datos * .905 ) / 10;
}

function pesoNeptuno(datos){
  return int_zero( 10 * datos * 1.133 ) / 10;
}

function pesoPluton(datos){
  return int_zero( 10 * datos * .067 ) / 10;
}
