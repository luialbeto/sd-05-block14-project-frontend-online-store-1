export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let API_URL = '';

  if (categoryId && query) {
    API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (query) {
    API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else {
    API_URL = `Não encontramos seu produto.`
  }

  return fetch(API_URL).then((response) => response.json());
}
