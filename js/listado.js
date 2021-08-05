var categoriesArray = [];

function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += document.getElementById('liMonedas').innerHTML+='<li>Dolar: '+category+'</li>';
        //`
        // <div class="list-group-item list-group-item-action">
        //     <div class="row">
        //         <div class="col-3">
        //             <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
        //         </div>
        //         <div class="col">
        //             <div class=" justify-content-between">
        //                 <h4 class="mb-1">`+ category.name +`</h4><br>
        //                 <small class="text-muted">` + category.description + ` artículos</small>
        //             </div>

        //         </div>
        //     </div>
        // </div>
        // `

         document.getElementById("liMonedas").innerHTML = (htmlContentToAppend);
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.rates;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
        
    });
});