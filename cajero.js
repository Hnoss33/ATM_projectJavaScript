class billete
{
  constructor(v,c) //valor y cantidad
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() //funcion disparada en el click del boton Extraer
  {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja ) //esto coge los elementos de la caja 1 por 1 en cada ciclo
  {
    if (dinero > 0)
{
    div = Math.floor(dinero / bi.valor);
    if(div > bi.cantidad)
    {
      papeles = bi.cantidad;
    }
    else
    {
    papeles = div;
    }
 entregado.push( new billete(bi.valor, papeles));
 dinero = dinero - (bi.valor * papeles);
}
  }
  if (dinero > 0 )
  {
    resultado.innerHTML = "dinero no disponible";
  }
  else
  {
    for( var e of entregado)// este estregado es el array que le empujamos por dentro nuevas instancias del objeto billete que tienen el valor del objeto decidido
    {
      if (e.cantidad > 0)
      {

      }
      resultado.innerHTML = resultado.innerHTML + e.cantidad + "billetes de $" + e.valor + "<br/>";
    }
  }

  }

var caja = []; // push de objetos agregamos, los objetos al array 0, 1, 2, 3
var entregado = []; //coleccion que entrego al usuario,
caja.push(new billete(100,50));
caja.push(new billete(50,40));
caja.push(new billete(20,30));
caja.push(new billete(10,30));
caja.push(new billete(5,30));
var resultado = document.getElementById("resultado");
var div = 0; //resultado de la division al itherar
var dinero = 0;
var papeles = 0;
var b = document.getElementById("extraer") // este es el boton, lo extraemos del html
document.addEventListener("click", entregarDinero);
