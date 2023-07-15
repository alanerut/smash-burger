const datos_car=[
    {
      img:"https://th.bing.com/th/id/OIP.OHNMx8y6l70g8RvC69SbewHaHa?pid=ImgDet&rs=1",
      title:"Cuadruple con Cheddar",
      fecha:" Fecha Salidad:01/7/2023",
      price_before:"$2335.00",
      price_now:"$1990.00",
    },
    {
      img:"https://casasemmiami.com.br/wp-content/uploads/2020/02/hamburger-houstons-aventura.jpg",
      title:"hamburguesa Aleman",
      fecha:" Fecha Salidad:01/7/2023",
      price_before:"$1950.00",
      price_now:"$1550.00",
    },
    {
      img:"https://static.wixstatic.com/media/fc266a_95b3c98dd25449fd952dfceb7eac91ed~mv2.jpg/v1/fit/w_321%2Ch_401%2Cal_c%2Cq_80/file.jpg",
      title:"doble bañada en Cheddar!",
      fecha:" Fecha Salidad:01/7/2023",
      price_before:"$2990.00",
      price_now:"$2590.00",
    },
    
  ]
  
  const cont_parent = document.getElementById("cont_parent");
  
  for(let index of datos_car){
    cont_parent.innerHTML+=`
     <div class="conte ">
           <div class="card stromtroper">
               <img src=${index.img} alt="">
           </div>
           <div class="informacion">
               <h1>${index.title}</h1>
              <p class="fecha">
                  ${index.fecha}
              </p>
           </div>
           <div class="precio">
               <div class="box-precio">
                   <span class="precio1"><strike>${index.price_before}</strike> </span>
               <span class="precio2"><b>${index.price_now}</b></span>
               </div>
               <span class="shoping"><i class="fas fa-cart-plus"></i></span>
           </div>
       </div>
    `
  }