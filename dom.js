const products = [
  {
    id: 1,
    name: "Lovely happy",
    image: "./book.jpg",
    price: 300,
    rating: 4.7,
    discount: 30,
  },
  {
    id: 2,
    name: "Think positive",
    image: "./book2.jpg",
    price: 500,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 3,
    name: "Lovely happy",
    image: "./book.jpg",
    price: 765,
    rating: 4.7,
    discount: 20,
  },
  {
    id: 4,
    name: "Think positive",
    image: "./book2.jpg",
    price: 500,
    rating: 4.7,
    discount: 10,
  },
  {
    id: 5,
    name: "Lovely happy",
    image: "./book.jpg",
    price: 700,
    rating: 5.7,
    discount: 30,
  },
  {
    id: 6,
    name: "Think Positive",
    image: "./book2.jpg",
    price: 200,
    rating: 6.7,
    discount: 20,
  },
];

for (let item of products) {
    const productContainer = document.getElementById('product-container');
  
    const allProducts = document.createElement("div");

    allProducts.innerHTML = `

  <div class="shadow-2xl p-4 space-y-4 rounded-lg">
                            <img class="w-[100%] h-[250px] rounded-lg" src="${item.image}" alt="">
                            <h1 class="text-4xl font-bold">${item.name}</h1>
                            <h2 class="text-2xl font-bold">Rating <span>${item.rating}</span></h2>
                             <div class="flex w-[100%] justify-between">
                                 <h1 class="text-3xl "><span class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Price:</span><span class="bg-amber-400 px-4 py-1 rounded-xl" id="price-${item.id}">${item.price}</span></h1>
                                  <div>
                                    <button onClick="apply(${item.id})" id="item-${item.id}" class="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-sm text-white">Apply</button>
                                  <h3 class="inline"><span class="font-bold">${item.discount}</span>%</h3>
                                  </div>
                             </div>
                             <button onClick="cartItem(${item.id})" class="bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 rounded-md text-white font-bold ">Add Cart</button>
                       </div>


`;

 productContainer.appendChild(allProducts)


 
}

function apply(id) {
    const item = document.getElementById(`price-${id}`)

    const result = (products[id-1].discount / 100) * products[id-1].price;

    const totalDiscount = products[id-1].price - result;

    item.innerText = totalDiscount;
    
}


function cartItem(id) {
    const cartDiv = document.createElement('div');
    const priceItem = document.getElementById(`price-${id}`);
    
    const totalItemPrice = document.getElementById("total-item-price");

    let totalItemPriceValue = parseFloat(totalItemPrice.innerText) + parseFloat(priceItem.innerText);
    

    const hideItem = document.getElementById('hide-Item');
    let increaseValue = parseInt(hideItem.innerText) + 1;
    hideItem.innerText = increaseValue;

    cartDiv.innerHTML = `
      <div class="flex items-center justify-between mt-4 ">
                         <h1 class="text-2xl text-white"><span>${increaseValue}.</span>${products[id-1].name}</h1>
                          <h3 class="font-bold text-amber-400">${priceItem.innerText}</h3>
                      </div>
    
    `;

    const cartItems = document.getElementById("cart-items");
    cartItems.appendChild(cartDiv);

    totalItemPrice.innerText = totalItemPriceValue;
    
}