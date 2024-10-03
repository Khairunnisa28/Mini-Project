// Example products
let products = [
  {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/50"
  },
  {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/50"
  }
];

// Cart array to hold items
let cart = [];

// Maximum quantity allowed
const maxQty = 10;

// Function to display items in the cart
function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // Clear the table before adding new items
  let totalCartPrice = 0;

  cart.forEach(item => {
      const row = document.createElement('tr');
      row.classList.add('cart-item');
      
      row.innerHTML = `
          <td><img src="${item.image}" alt="${item.name}" width="50"></td>
          <td>${item.name}</td>
          <td>
              <input type="number" value="${item.qty}" min="1" max="${maxQty}" data-id="${item.id}" class="qty-input">
          </td>
          <td>${item.price}</td>
          <td>${item.price * item.qty}</td>
          <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button></td>
      `;
      
      cartItems.appendChild(row);
      totalCartPrice += item.price * item.qty;
  });

  // Update the total price in the HTML
  document.getElementById('total-price').innerText = totalCartPrice;

  // Add event listener for changing quantity
  document.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', (event) => {
          updateQuantity(event.target.dataset.id, event.target.value);
      });
  });
}

// Function to add products to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
      if (existingItem.qty < maxQty) {
          existingItem.qty += 1;
      } else {
          alert(`Maximum quantity of ${maxQty} reached for ${existingItem.name}`);
      }
  } else {
      cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: 1
      });
  }
  displayCart();
}

// Function to remove item from the cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  displayCart();
}

// Function to update quantity of an item
function updateQuantity(productId, newQty) {
  const item = cart.find(item => item.id == productId);
  newQty = parseInt(newQty);
  
  if (newQty > maxQty) {
      alert(`Maximum quantity for this product is ${maxQty}`);
      item.qty = maxQty;
  } else if (newQty < 1) {
      item.qty = 1;
  } else {
      item.qty = newQty;
  }
  
  displayCart();
}

// Add items to cart for demonstration
addToCart(1);
addToCart(2);

// Proceed to payment (you can add your own logic here)
document.getElementById('proceed-to-payment').addEventListener('click', () => {
  alert('Proceeding to payment');
});
