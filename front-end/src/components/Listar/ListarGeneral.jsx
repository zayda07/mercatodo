import React, { useEffect, useState } from "react";
import * as MercatodoServer from "../MercatodoServer";
import "./Listar.css";
import { Nav } from "../Nav/Nav";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export const ListarGeneral = () => {

  const [products, setProducts] = useState([]);

  const listProducts = async () => {
    try {
      const res = await MercatodoServer.listProducts();
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <Nav />
      <div class="container mt-5">
        <p class="mt-4 font-weight-bold h4 mb-4">Lista de Productos</p>
        <Link to="/add">
          <button routerLink="/add" type="button" class="btn btn-add mb-3">
            Agregar <BiPlus />
          </button>
        </Link>

        <div class="table-responsive mt-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">N.</th>
                <th scope="col">Nombre Producto</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Fecha llegada</th>
                <th scope="col">Descripción</th>
                <th scope="col">Categoria</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td data-label="ID">{product.id}</td>
                  <td data-label="Nombre del producto">{product.pro_name}</td>
                  <td data-label="Proveedor">{product.pro_provider}</td>
                  <td data-label="Cantidad">{product.pro_existences}</td>
                  <td data-label="Fecha llegada">{product.pro_date.replace("T"," ").slice(0,-1)}</td>
                  <td data-label="Descripción">{product.pro_description}</td>
                  <td data-label="Categoria">{product.pro_category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
