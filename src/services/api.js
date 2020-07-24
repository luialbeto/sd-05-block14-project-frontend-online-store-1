export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories', { method: 'GET' })
  .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, { method: 'GET' })
  .then((response) => response.json());
}
