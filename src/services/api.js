const fetch = require('node-fetch');

export async function getCategories() {
  return await fetch('https://api.mercadolibre.com/sites/MLB/categories', { method: 'GET' })
  .then(response => response.json())
  .catch(error => console.log('Error'));
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  return await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, { method: 'GET' })
  .then(response => response.json())
  .catch(error => console.log('Error'));
}
