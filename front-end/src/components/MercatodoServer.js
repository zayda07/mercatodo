const API_URL = "https://floating-beach-39441.herokuapp.com/api/products/";
const API_LOGGIN = "https://floating-beach-39441.herokuapp.com/api/users/";


export const listProducts = async () => {
  return await fetch(API_URL);
};

export const listUser = async () => {
  return await fetch(API_LOGGIN);
};

export const getProduct = async (productId) => {
    return await fetch(`${API_URL}${productId}`);
};



export const User = async (username) => {
  console.log(username)
    return await fetch(API_LOGGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify(username),
      });
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