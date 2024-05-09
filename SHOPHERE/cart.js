const cartApiUrl = 'https://fakestoreapi.com/carts'; 

// Function to fetch cart data from the cart API and log it to the console
async function fetchAndLogCartData() {
  try {
    const response = await fetch(cartApiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch cart data');
    }
    const cartData = await response.json();
    console.log('Cart data:', cartData);
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
}

// Call the function to fetch and log cart data
fetchAndLogCartData();
