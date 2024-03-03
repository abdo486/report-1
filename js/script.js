
let prod = document.getElementById("prod")
let search = document.getElementById("search")



  let products=[
    {image:'../images/51ZOXEgJAmL.__AC_SY300_SX300_QL70_ML2_.jpg',name:'laptop',price:8000},
    {image:'../images/61p79A67kPL.__AC_SX300_SY300_QL70_ML2_.jpg',name:'mobile',price:4000},
    {image:'../images/61tPyctcoHL._AC_SX679_.jpg',name:'sweatshirt',price:400},
    {image:'../images/61xILY-dPJL.__AC_SY300_SX300_QL70_ML2_.jpg',name:'tv',price:4000},
    {image:'../images/71Ucl91rf5L.__AC_SY445_SX342_QL70_ML2_.jpg',name:'sweatshirt',price:300},
    
  ]  
 
  

function display(){
  let show = ``;
  for(let i =0 ;i<products.length;i++){
    show+=`  <div class="col">
    <div class="card text-center p-4">
      <div class='img-style mb-2'>
      <img src=${products[i].image} class="card-img-top h-100 "  alt="...">

      
      </div>
      <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price}</p>
      </div>
    </div>
  </div>`
  }
  console.log(show)
  prod.innerHTML=show
}

display()


function searchProd(e){
  let show = ``;
 for(let i = 0 ; i< products.length; i++){
  if( products[i].name.toLowerCase().includes(e.toLowerCase())){
    show+=` <div class="col">
    <div class="card text-center p-4">
      <div class='img-style mb-2'>
      <img src=${products[i].image} class="card-img-top h-100 "  alt="...">

      
      </div>
      <div class="card-body">
        <h5 class="card-title">${products[i].name.replace(e,`<span class="bg-info">${e}</span>`)}</h5>
        <p class="card-text">${products[i].price}</p>
      </div>
    </div>
  </div>`
  }
  prod.innerHTML=show
  }
 }





