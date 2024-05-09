window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Fetch the product details using the productId
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }
            return response.json();
        })
        .then(product => {
            // Display the product details on the page
            displayProductDetails(product);
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
};

function displayProductDetails(product) {
    // Example: Display product details in the HTML elements
    document.getElementById('Title').textContent = product.title;
    document.getElementById('Description').textContent = product.description;
    document.getElementById('Price').textContent = product.price;
    document.getElementById('Image').src = product.image;
    document.getElementById('Rating').textContent= product.rating;
    // You can display other product details similarly
}