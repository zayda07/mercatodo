import React, { useState } from "react";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as MercatodoServer from '../MercatodoServer'
// import styles from './Agregar.module.css'

export const Agregar = () => {
  const initialState ={name: "",proveedor:"",cantidad:0,date:"", descripcion:"",categoria:"" }
  const [product, setProduct] = useState(initialState)
  const handleInputChange = (e) =>{
    setProduct({...product,[e.target.name]:e.target.value});
  }

  const history = useHistory();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      let res;
      res= await MercatodoServer.registerProduct(product);
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    console.log(product);
    history.push("/products");
  }

  return (
    <>
      <Nav />
      <div class="container mt-5 mb-5">
        <p class="d-flex justify-content-center font-weight-bold h4">
          Agregar Producto
        </p>
        <div class="row d-flex justify-content-center mt-4">
          <div class="col-sm-6">
            <form onSubmit={handleSubmit}>
              <div class="mb-2">
                <label class="form-label">Nombre del producto</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  title="No puedes añadir caracteres especiales"
                  required
                  value={product.name}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Proveedor</label>
                <input
                  type="text"
                  class="form-control"
                  name="proveedor"
                  title="No puedes añadir caracteres especiales"
                  required
                  value={product.proveedor}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Cantidad</label>
                <input
                  type="number"
                  class="form-control"
                  name="cantidad"
                  pattern="/^([0-9])*$/"
                  title="Dato no valido"
                  required
                  value={product.cantidad}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Fecha de llegada</label>
                <input
                  type="datetime-local"
                  class="form-control"
                  name="date"
                  title="Dato no valido"
                  required
                  value={product.date}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Descripción</label>
                <textarea
                  type="text"
                  class="form-control"
                  maxLength="40"
                  name="descripcion"
                  required
                  value={product.descripcion}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Categoria</label>
                <select class="form-control" name="categoria" onChange={handleInputChange} value={product.categoria}>
                  <option value="1">Cárnicos</option>
                  <option value="2">Lácteos</option>
                  <option value="3">Embutidos</option>
                  <option value="4">Bebidas</option>
                  <option value="5">Granos</option>
                  <option value="6">Enlatados</option>
                  <option value="7">Frutas y verduras</option>
                  <option value="8">Dulcería</option>
                  <option value="9">Elementos de aseo</option>
                  <option value="10">Desinfectantes</option>
                  <option value="11">Aseo personal</option>
                </select>
              </div>
              <button class="btn btn-primary">Agregar</button>
              <Link to="/products">
                <button class="btn btn-danger ml-3">Cancelar</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
