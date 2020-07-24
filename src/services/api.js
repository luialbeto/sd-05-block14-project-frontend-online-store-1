const fetch = require('node-fetch');

export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories', { method: 'GET' })
  .then((response) => response.json())
  .catch(() => console.log('Error'));
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, { method: 'GET' })
  .then(response => response.json())
  .catch(() => console.log('Error'));
}
