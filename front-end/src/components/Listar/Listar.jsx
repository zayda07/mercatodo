import React from "react";
import "./Listar.css";
import { Nav } from "../Nav/Nav";
import { BiPlus } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Listar = () => {
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
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="ID">001</td>
                <td data-label="Nombre del producto">Colgate</td>
                <td data-label="Proveedor">003</td>
                <td data-label="Cantidad">100</td>
                <td data-label="Fecha llegada">12/12/2021 12:00</td>
                <td data-label="Descripción">Producto nuevo</td>
                <td data-label="Categoria">Aseo</td>
                <td>
                  <Link to="/edit/1">
                    <button type="button" class="btn btn-edit">
                      <BiPencil />
                    </button>
                  </Link>
                </td>
                <td>
                  <button type="button" class="btn btn-danger">
                    <BiTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
