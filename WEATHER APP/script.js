const apiUrl = 'https://fakestoreapi.com/products';

// Function to fetch product data from the API
function fetchProductData() {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            return response.json();
        });
}

// Function to display product data in the product display area
function displayProductData(products) {
    const productDisplayArea = document.getElementById('product-display');

    // Clear previous products
    productDisplayArea.innerHTML = '';

    // Create product cards and append them to the product display area
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create and add content (product name, image, price) to the product card

        productDisplayArea.appendChild(productCard);
    });
}

// Function to handle search functionality
function searchProducts(query) {
    // Implement search logic based on product name or other criteria
    // Filter products array to include only matching products
    const matchingProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    displayProductData(matchingProducts);
}

// Fetch product data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchProductData()
        .then(products => {
            displayProductData(products);
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});

// Event listener for search button click
const searchButton = document.getElementById('search');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('location').value;
    searchProducts(searchInput);
});
