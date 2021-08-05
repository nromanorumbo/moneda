const LIST_URL = "http://data.fixer.io/api/latest?access_key=4302a929e29f7ce1b8ac8a9f6bb53a2a";


// var showSpinner = function(){
//   document.getElementById("spinner-wrapper").style.display = "block";
// }

// var hideSpinner = function(){
//   document.getElementById("spinner-wrapper").style.display = "none";
// }
// showSpinner()
// setTimeout(function(){hideSpinner(); }, 1000);



fetch(LIST_URL)
  .then(respuesta=> respuesta.json())
  .then(monedas=>{
            document.getElementById("txtTitulo").innerHTML="la cotizacion del euro para la fecha es: "+monedas.date;

            document.getElementById('liMonedas').innerHTML+='<li>Dolar:'+ monedas.rates.USD+'</li>';
  })
