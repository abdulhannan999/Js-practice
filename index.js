const products = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_1.png",
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_2.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_3.png",
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_4.png",
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_5.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_6.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_7.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_8.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_9.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_10.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_11.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    img: "product_12.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_13.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_14.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_15.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_16.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_17.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_18.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_19.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_20.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_21.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_22.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_23.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "product_24.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_25.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_26.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_27.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_28.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_29.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_30.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_31.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_32.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_33.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_34.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_35.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    img: "product_36.png",
    new_price: 85.0,
    old_price: 120.5,
  },
];

// That our main page

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

//Callback

const DisplayProducts = (category = "all") => {
  const container = document.getElementById("ProductList");
  container.innerHTML = "";

  const filteredProducts =
    category === "all"? products
      : products.filter((product) => product.category === category);

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-lg-4", "g-3", "col-sm-auto");
    container.classList.add(
      "d-flex",
      "flex-wrap",
      "justify-content-center",
      "m-auto"
    );

    productElement.innerHTML = `
      <div class="card" style="width: 280px; height:auto;">
        <img src="assets/${product.img}" class="card-img-top" style="width: 100%; height: 220px; object-fit: cover;" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${product.new_price}$</h6>
          <button class="btn btn-primary" onclick="AddCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;

    container.appendChild(productElement);
  });
};
const filterByCategory = (category) => {
  DisplayProducts(category);
};

// This will add the product to cart
const AddCart = (productId) => {
//   console.log(productId);

  let cart = JSON.parse(localStorage.getItem("cart")) ||[] ;
  const isExist = cart.find((item) => item.id == productId);

  if (isExist) {
    isExist.quantity += 1;
  } else {
    let AddProduct = products.find((x) => x.id == productId);

    cart.push({
      id: AddProduct.id,
      name: AddProduct.name,
      price: AddProduct.new_price,
      img: AddProduct.img,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showAlert("Item added to cart!", "success");
};

// Bootstrap 5 Modal instance
const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));

document.getElementById("openCartBtn").addEventListener("click", () => {
  renderCartItems();
  cartModal.show();
});

//This will render our bootstrap Cart
const renderCartItems = () => {
  const cartContainer = document.getElementById("cartItemsContainer");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";

    return;
  }



  let html = '<div class="list-group">';
  cart.forEach((item) => {
    html += `
    <div class="list-group-item d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="assets/${item.img}" alt="${
      item.name
    }" style="width: 60px; height: 60px; object-fit: cover; margin-right: 15px;">
        <div>
          <h6>${item.name}</h6>
          <p class="mb-0">Price: $${item.price * item.quantity}</p>

          <div class="btn-group align-items-center mt-2" role="group" aria-label="Quantity controls">
            <button type="button" class="btn btn-danger btn-sm" onclick="UpdateOne(${
              item.id
            })">+</button>
            <span class="px-3 d-flex align-items-center border bg-light text-dark" style="font-weight: 500;">
              ${item.quantity}
            </span>
            <button type="button" class="btn btn-success btn-sm" onclick="RemoveOne(${
              item.id
            })">-</button>
          </div>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${
          item.id
        })">Remove</button>
      </div>
    </div>
  `;
  });

  html += "</div>";

  cartContainer.innerHTML = html;
};

//This function will remove the quantity by one
const RemoveOne = (ProductId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const FindItem = cart.find((item) => item.id == ProductId);
  if (FindItem.quantity > 1) {
    FindItem.quantity -= 1;
  } else {
    cart = cart.filter((item) => item.id !== ProductId);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
};

//This function will add the quantity by one
const UpdateOne = (ProductId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const FindItem = cart.find((item) => item.id == ProductId);

  FindItem.quantity += 1;

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  
};

// This will Remove the product altogether
const removeFromCart = (productId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((item) => item.id !== productId);

  //
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
};

//This will show the Error and Success alert
const showAlert = (message, type = "success") => {
  const alertContainer = document.getElementById("alert-container");

  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.style.minWidth = "200px";
  alertDiv.role = "alert";
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  alertContainer.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.classList.remove("show");
    alertDiv.classList.add("hide");
    setTimeout(() => alertDiv.remove(), 500);
  }, 3000);
};

window.onload = DisplayProducts("all");

//User Flow of my Project



const updateCount=()=>{
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      
    const count = document.getElementById("count");
count.innerText=cart.length
count.classList.add("text-primary")


}





// localStorage > [value:{}]||[]



// map > return array 
// foreach> array> val1 , val2 , val 3..
// DOM direcly maninpulate 

// React > map > Virtual Dom > list style 
// array > 0 value 