const API_URL = "http://127.0.0.1:8000/api/products/";

export const listProducts = async () => {
  return await fetch(API_URL);
};

export const getProduct = async (productId) => {
    return await fetch(`${API_URL}${productId}`);
};

export const registerProduct = async (newProduct) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "pro_name": String(newProduct.name).trim(),
      "pro_provider": String(newProduct.proveedor).trim(),
      "pro_existences": parseInt(newProduct.cantidad),
      "pro_date": String(newProduct.date).trim(),
      "pro_description": String(newProduct.descripcion).trim(),
      "pro_category": String(newProduct.categoria).trim(),
    }),
  });
};

export const updateProduct = async (productId, updatedProduct) => {
    return await fetch(`${API_URL}${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "pro_name": String(updatedProduct.name).trim(),
            "pro_provider": String(updatedProduct.proveedor).trim(),
            "pro_existences": parseInt(updatedProduct.cantidad),
            "pro_date": String(updatedProduct.date).trim(),
            "pro_description": String(updatedProduct.descripcion).trim(),
            "pro_category": String(updatedProduct.categoria).trim(),
            }),
    });
};

export const deleteProduct = async (productId) => {
    return await fetch(`${API_URL}${productId}`, {
        method: 'DELETE'
    });
};