import React from "react";
import { Nav } from "../Nav/Nav";

// import styles from './Agregar.module.css'

export const Agregar = () => {
  return (
    <>
      <Nav />
      <div class="container mt-5">
        <p class="d-flex justify-content-center font-weight-bold h4">
          Agregar Producto
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
              <button class="btn btn-primary">Agregar</button>
              <button class="btn btn-danger ml-3">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
