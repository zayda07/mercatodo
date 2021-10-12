import React from "react";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

// import styles from './Agregar.module.css'

export const Editar = () => {

  const { id } = useParams();
  console.log(id)
  return (
    <>
      <Nav />
      <div class="container mt-5 mb-5">
        <p class="d-flex justify-content-center font-weight-bold h4">
          Editar Producto
        </p>
        <div class="row d-flex justify-content-center mt-4">
          <div class="col-sm-6">
            <form>
              <div class="mb-2">
                <label class="form-label">Nombre del producto</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  pattern="[A-Za-z0-9]+"
                  title="No puedes añadir caracteres especiales"
                  required
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Proveedor</label>
                <input
                  type="text"
                  class="form-control"
                  name="proveedor"
                  pattern="[A-Za-z0-9]+"
                  title="No puedes añadir caracteres especiales"
                  required
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
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Fecha de llegada</label>
                <input
                  type="datetime-local"
                  class="form-control"
                  name="year"
                  title="Dato no valido"
                  required
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
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Categoria</label>
                <select class="form-control">
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
              <Link to="/products">
                <button type="submit" class="btn btn-primary">Editar</button>
              </Link>
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
