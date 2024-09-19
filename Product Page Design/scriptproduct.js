// Existing code for image gallery
let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "images/image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

btn[1].onclick = function () {
  productImg.src = "images/image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

btn[2].onclick = function () {
  productImg.src = "images/image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

// New code for color change
let colorInputs = document.querySelectorAll(".color-select input");

colorInputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (this.checked) {
      productImg.src = this.getAttribute("data-image");
    }
  });
});

// Quantity and Stock Limit Logic
const quantityInput = document.getElementById("quantityInput");
const stockInfo = document.getElementById("stockInfo");
const maxStock = 10; // Set stock limit here

// Display stock information
stockInfo.innerText = `Available stock: ${maxStock}`;

// Handle quantity input restrictions
quantityInput.addEventListener("input", function () {
  let value = parseInt(quantityInput.value);
  if (value < 1) {
    quantityInput.value = 1;
  }
  if (value > maxStock) {
    quantityInput.value = maxStock;
    alert(`Sorry, we only have ${maxStock} items in stock.`);
  }
});

// Handle buy button click
document.getElementById("buyButton").addEventListener("click", function () {
  let selectedQuantity = parseInt(quantityInput.value);
  if (selectedQuantity > maxStock) {
    alert(`Only ${maxStock} items available.`);
  } else {
    alert(`You have purchased ${selectedQuantity} item(s).`);
  }
});
