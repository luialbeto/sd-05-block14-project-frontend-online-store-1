const fetch = require('node-fetch');

// export 
async function getCategories() {
  return await fetch('https://api.mercadolibre.com/sites/MLB/categories', { method: 'GET' })
  .then(response => response.json())
}

// export 
async function getProductsFromCategoryAndQuery(categoryId, query) {
  await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, { method: 'GET' })
  .then(response => response.json())
  // .then(data => console.log(data))
}

getCategories().then(data => {console.log(data)});

getProductsFromCategoryAndQuery('MLB5672', 'porta');
