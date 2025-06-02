// const DisplayProducts=()=>{

//  let container = document.getElementById('ProductList')

//   products.forEach(product => {
//     const productElement = document.createElement('div')
//     // productElement.classList.add("col-lg-4","g-3","col-sm-12"); // Use col-4 for grid columns
//     productElement.classList.add('col-lg-4', 'g-3', 'col-sm-auto')
//     container.classList.add('d-flex', 'flex-wrap', 'justify-content-center',"m-auto")

//     productElement.innerHTML = `
//       <div class="card" style="width: 280px; height:auto;">
//         <img src="assets/${product.img}" class="card-img-top" style=" width: 100%;
//   height: 220px;
//   object-fit: cover;" alt="${product.name}">
//         <div class="card-body">
//           <h5 class="card-title">${product.name}</h5>
//           <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${product.new_price}$</h6>
//           <button class="btn btn-primary" onclick="AddCart(${product.id})"
// >Add to Cart</button>
//         </div>
//       </div>
//     `

//     container.appendChild(productElement)
//   })
// }