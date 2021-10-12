const API_URL = "http://127.0.0.1:8000/api/products/";

export const listProducts = async () => {
    return await fetch(API_URL);
};

export const registerProduct = async (newProduct) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newProduct.name).trim(),
            "proveedor": String(newProduct.proveedor).trim(),
            "cantidad": parseInt(newProduct.cantidad),
            "date": String(newProduct.date).trim(),
            "descripcion": String(newProduct.descripcion).trim(),
            "categoria": String(newProduct.categoria).trim(),
        })
    });
};