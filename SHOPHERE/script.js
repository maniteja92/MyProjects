const apiUrl = 'https://fakestoreapi.com/products';


function DisplayProductData(products) {



  const container = document.querySelector('.product-container')

  products.forEach(product => {

    const ProductTitle = document.createElement('p2');
    ProductTitle.textContent = product.title;


    const EveryProduct = document.createElement('div');
    EveryProduct.classList.add('Every-Product');
    

    const ProductImage = document.createElement('img');
    ProductImage.src = product.image

    


    EveryProduct.appendChild(ProductTitle);
    
    EveryProduct.appendChild(ProductImage);
    
    container.appendChild(EveryProduct);

    EveryProduct.addEventListener('click', () => {
      const productId = product.id;
      
      window.location.href = `product-details.html?id=${productId}`;
    });


    


  });
}





fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    return response.json();
  })
  .then(data => {
    DisplayProductData(data);
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });



  
const cartIcon = document.getElementById('product-cart');
cartIcon.addEventListener('click', () => {
  window.location.href = 'cart.html';
});