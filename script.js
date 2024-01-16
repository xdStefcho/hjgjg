
// Create an image element
// function addToCart() {
//   // Open the shopping cart page with the item
//   const baseUrl = 'shopping_cart.html';

//       // Create the complete URL with the item parameter
//       const url = `${baseUrl}?item=${best.png(item)}`;

//       // Open the shopping cart page with the item
//       window.open(url, "_self");
// }

document.getElementById('buy-now-btn').addEventListener('click', () => {
  // Here you might add functionality to handle the purchase, e.g., redirecting to a payment page or processing the order
  alert('Thank you for your purchase!');
});

// Display products initially
displayProducts();


document.addEventListener('DOMContentLoaded', function() {
  const decreaseButton = document.querySelector('.decrease');
  const increaseButton = document.querySelector('.increase');
  const quantityInput = document.querySelector('.quantity-input');

  decreaseButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  increaseButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
});
